# Making Changes to the Sanity Schema

This guide explains how to properly update the Sanity schema and ensure all connected code stays in sync.

## Quick Decision Tree

**Starting point:** "I need to change something in the schema"

### 1. Is it a FIELD ADDITION?
- Adding a new field to the schema
- Adding optional fields that don't break existing queries
- **Go to: FIELD ADDITION flow below**

### 2. Is it a FIELD REMOVAL?
- Removing a field that's no longer needed
- **Go to: FIELD REMOVAL flow below**

### 3. Is it a FIELD RENAME?
- Renaming an existing field (e.g., `techStack` → `stack`)
- **Go to: FIELD RENAME flow below**

### 4. Is it a FIELD TYPE CHANGE?
- Changing field type (e.g., string → array, or select options change)
- **Go to: FIELD TYPE CHANGE flow below**

---

## Flow 1: FIELD ADDITION (simplest case)

**Example:** Adding a new optional field like `license` or `deploymentUrl`

### Step-by-Step:

1. **Update Sanity Schema** (`/sanity/schemaTypes/project.ts`)
   - Add the new field definition
   - If it's required, mark with `validation: (rule) => rule.required()`
   - If it's optional, no validation needed

2. **Update GROQ Query** (`/sanity/lib/queries.ts`)
   - Add the new field to `allProjectsQuery`
   - Add to `projectByIdQuery`
   - Add to `featuredProjectsQuery` (if needed)
   - Example: Add `"newField": newField` to each query

3. **Update Type Interface** (if field is used in frontend)
   - Edit `/lib/types.ts` Project interface
   - Add new field with optional (`?`) if not required: `newField?: string;`

4. **Update Mapper** (if field is used in frontend)
   - Edit `/sanity/lib/projectMapper.ts` SanityProject interface
   - Add field to interface
   - Update `sanityProjectToFrontend()` to include new field in returned object

5. **Update Components** (if displaying the new field)
   - Edit any components that display project data
   - Add conditional rendering if optional: `{project.newField && <div>{project.newField}</div>}`

6. **Test**
   - Verify component displays new field correctly
   - Check browser console for any errors
   - Run `npm run build` to check TypeScript

### Example: Adding `deploymentUrl` field

```typescript
// 1. Schema
{
  name: 'deploymentUrl',
  type: 'url',
  title: 'Deployment URL',
  description: 'URL where the project is deployed/hosted',
  validation: (rule: Rule) => rule.uri({ scheme: ['http', 'https'] }),
}

// 2. Query
"deploymentUrl": deploymentUrl,

// 3. Type interface
deploymentUrl?: string;

// 4. Mapper - SanityProject interface
deploymentUrl?: string;

// 5. Mapper - sanityProjectToFrontend()
deploymentUrl: sanityDoc.deploymentUrl,

// 6. Component
{project.deploymentUrl && (
  <a href={project.deploymentUrl} target="_blank">
    View Live
  </a>
)}
```

---

## Flow 2: FIELD REMOVAL

**Example:** Removing the deprecated `isFeatured` field (currently hidden)

### Step-by-Step:

1. **Check Current Usage**
   - Search codebase for field name: `grep -r "isFeatured" .`
   - If used in queries, need to remove from queries first

2. **Update GROQ Queries** (`/sanity/lib/queries.ts`)
   - Remove field from all queries

3. **Update Type Interface** (`/lib/types.ts`)
   - Remove from Project interface

4. **Update Mapper** (`/sanity/lib/projectMapper.ts`)
   - Remove from SanityProject interface
   - Remove from `sanityProjectToFrontend()` function

5. **Update Components**
   - Search for any component usage: `grep -r "project.isFeatured" .`
   - Remove or refactor logic

6. **Update Sanity Schema** (LAST - after code is updated)
   - Remove field from `/sanity/schemaTypes/project.ts`
   - This prevents new Sanity documents from including it

7. **Test**
   - Run `npm run build` 
   - Verify no references to removed field in code

---

## Flow 3: FIELD RENAME

**Example:** Renaming `techStack` → `stack`

### Step-by-Step:

1. **Update Sanity Schema** (`/sanity/schemaTypes/project.ts`)
   - Change field `name: 'techStack'` → `name: 'stack'`
   - Keep `title` descriptive

2. **Keep Old Field as Hidden** (optional, for backward compatibility)
   ```typescript
   {
     name: 'techStack',
     hidden: true,
     // ... rest of definition
   }
   ```

3. **Update GROQ Queries** (`/sanity/lib/queries.ts`)
   - Change `techStack` → `stack` in all queries
   - Example: `stack,` instead of `techStack,`

4. **Update Type Interface** (`/lib/types.ts`)
   - Rename field in Project interface: `stack: string[];`

5. **Update Mapper** (`/sanity/lib/projectMapper.ts`)
   - Rename in SanityProject interface: `stack: string[];`
   - Update mapping: `stack: sanityDoc.stack || [],`

6. **Update All Components**
   - Search for `project.techStack` → replace with `project.stack`
   - Check: `grep -r "techStack" .`
   - Update all occurrences

7. **Test**
   - Run `npm run build` to catch any missed renames
   - Verify components display correctly

---

## Flow 4: FIELD TYPE CHANGE

**Example:** Changing `timeline: string` → `timeline: {start: date, end: date}`

This is **more complex** and follows a migration pattern:

### Step-by-Step:

1. **Create New Field in Schema**
   ```typescript
   {
     name: 'timelineObject',
     type: 'object',
     title: 'Project Timeline (New Format)',
     fields: [
       { name: 'start', type: 'date', title: 'Start Date' },
       { name: 'end', type: 'date', title: 'End Date' }
     ]
   }
   ```

2. **Keep Old Field Alongside**
   - Don't delete `timeline: string` yet
   - Mark old field as hidden in schema

3. **Update Queries** (`/sanity/lib/queries.ts`)
   - Add new field to queries
   - Keep querying old field for now (for data migration period)

4. **Create Migration Handler in Mapper**
   ```typescript
   // In projectMapper.ts
   timeline: sanityDoc.timelineObject 
     ? `${sanityDoc.timelineObject.start} - ${sanityDoc.timelineObject.end}`
     : sanityDoc.timeline || '', // fallback to old field
   ```

5. **Update Type Interface** (optional, can keep backward compatible)
   - Could keep timeline as string
   - Or create new type with both options

6. **Update Components**
   - Test with new data format
   - Update display logic if needed

7. **Data Migration Phase**
   - Manually update Sanity documents to use new field
   - Verify data displays correctly

8. **Cleanup** (after all docs migrated)
   - Remove old field from schema
   - Remove old field from queries
   - Simplify mapper

---

## IMPORTANT RULES TO FOLLOW

### ✅ DO:
- **Always update in this order:**
  1. Schema
  2. Queries
  3. Type interface
  4. Mapper
  5. Components
  6. Test

- **Run `npm run build`** after each major change to catch TypeScript errors early

- **Test in Sanity Studio** after schema changes to verify validation works

- **Use `grep` to find all usages** of a field before deleting: `grep -r "fieldName" . --include="*.ts" --include="*.tsx"`

### ❌ DON'T:
- Remove fields from queries before removing from components
- Change field names in schema without updating all queries
- Skip the mapper update (leads to undefined values)
- Test only in dev—always build for production checks

---

## Quick Reference Checklist

For **ANY** schema change, use this checklist:

- [ ] Update `/sanity/schemaTypes/project.ts`
- [ ] Update `/sanity/lib/queries.ts` (all 4 queries if applicable)
- [ ] Update `/lib/types.ts` if frontend uses the field
- [ ] Update `/sanity/lib/projectMapper.ts` if frontend uses the field
- [ ] Search codebase: `grep -r "fieldName" .`
- [ ] Update all component files that reference the field
- [ ] Run `npm run build` to verify TypeScript
- [ ] Test in browser/Sanity Studio
- [ ] Commit changes with clear message

---

## Common Mistakes & How to Avoid

| Mistake | Why it breaks | How to fix |
|---------|---------------|-----------|
| Update schema but forget queries | Queries return `undefined` for new field | Add field to all GROQ queries |
| Update queries but forget mapper | Field exists in query but not passed to frontend | Update `sanityProjectToFrontend()` return object |
| Update mapper but forget component | Mapper returns field but component undefined | Render the field in component: `{project.newField}` |
| Rename field in schema but use old name in queries | Queries will error | Use correct field name in all GROQ queries |
| Delete field without checking usage | Build breaks in multiple places | Search entire codebase first with `grep` |

---

## When to Use Each Workflow

| Scenario | Use This Flow |
|----------|---------------|
| "I want to add a new field to track something" | **Field Addition** |
| "I want to remove an unused field" | **Field Removal** |
| "I want to make a field name more consistent" | **Field Rename** |
| "I want to change how data is structured" | **Field Type Change** |
| "I want to add validation to a field" | **Field Addition** (just add validation rule) |
| "I need to support multiple languages" | Consult with team (out of scope) |

---

## Quick Examples for Common Additions

### Adding a Repository URL
```typescript
// 1. Schema
{ name: 'repositoryUrl', type: 'url', title: 'Repository URL' }

// 2. Query
"repositoryUrl": repositoryUrl,

// 3. Type
repositoryUrl?: string;

// 4. Mapper
repositoryUrl: sanityDoc.repositoryUrl,

// 5. Component
{project.repositoryUrl && <a href={project.repositoryUrl}>Repo</a>}
```

### Adding Awards/Recognition Array
```typescript
// 1. Schema
{
  name: 'awards',
  type: 'array',
  title: 'Awards & Recognition',
  of: [
    {
      type: 'object',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'year', type: 'number' }
      ]
    }
  ]
}

// 2. Query
"awards": awards[] { title, year }

// 3. Type
awards?: Array<{ title: string; year: number }>;

// 4. Mapper
awards: sanityDoc.awards,

// 5. Component
{project.awards?.map(award => (
  <div key={award.title}>{award.title} ({award.year})</div>
))}
```
