# AGENTS.md

This file defines the guidelines, conventions, and operational rules for AI agents (and human developers) working on the **Good Dose Drug Button** project.

## 1. Project Overview

- **Name**: Good Dose Drug Button
- **Purpose**: A web application to celebrate taking medication.
  - Users press a button when they take their meds.
  - The app provides positive reinforcement (praise).
  - Allows sharing the achievement on X (formerly Twitter).
- **Structure**:
  - The repository root contains documentation.
  - The actual Angular application lives strictly within the `src/` directory.

## 2. Environment & Commands

### 2.1 Critical Path

**IMPORTANT**: The root of the Angular project is the `src/` directory, NOT the repository root.
All `pnpm`, `ng`, and `node` commands **MUST** be executed with `src/` as the working directory.

### 2.2 Build & Test Commands

Run the following commands inside the `src/` directory:

| Action            | Command                                            | Description                    |
| ----------------- | -------------------------------------------------- | ------------------------------ |
| **Install**       | `pnpm install`                                     | Install dependencies.          |
| **Start**         | `pnpm start`                                       | Start dev server on port 4200. |
| **Build**         | `pnpm build`                                       | Build for production.          |
| **Test (All)**    | `pnpm test`                                        | Run all unit tests via Vitest. |
| **Test (Single)** | `ng test --include "src/app/path/to/file.spec.ts"` | Run tests for a specific file. |
| **Lint/Format**   | `npx prettier --write .`                           | Format code using Prettier.    |

> **Note**: If `ng test` fails with schema errors, ensure you are not passing unsupported arguments. Use `--include` for filtering.

## 3. Code Style & Guidelines

Adhere strictly to these conventions to maintain codebase consistency.

### 3.1 Angular Architecture

- **Framework Version**: Angular v21+
- **Standalone Components**:
  - **MANDATORY**: Use `standalone: true` for all components, directives, and pipes.
  - **FORBIDDEN**: Do NOT create `NgModule`s.
  - Import dependencies directly in the `imports` array of the component decorator.
- **Signals**:
  - Use Angular Signals for all local and shared state.
  - Services should be stateless whenever possible; prefer components holding state and services providing pure logic or data fetching.
  - Prefer `computed()` over getters for derived state.
  - Prefer `effect()` for side effects over `ngOnChanges`.
  - Avoid `RxJS` streams for simple synchronous state; reserve Observables for complex async flows (HTTP, events).
- **Control Flow**:
  - Use the built-in control flow syntax: `@if`, `@for`, `@switch`.
  - Do NOT use `*ngIf`, `*ngFor`, `*ngSwitch`.

### 3.2 Dependency Injection

- Use the `inject()` function for dependency injection.
- Avoid constructor-based injection to keep classes cleaner.

```typescript
// ✅ Good
private readonly http = inject(HttpClient);

// ❌ Avoid
constructor(private http: HttpClient) {}
```

### 3.3 TypeScript & Formatting

- **Strict Typing**:
  - Strict mode is enabled.
  - Do NOT use `any`. Define interfaces or types for all data structures.
  - Return types for functions are recommended but not strictly enforced if inferred correctly.
- **Formatting (Prettier)**:
  - `printWidth`: 100
  - `singleQuote`: true
  - Ensure your generated code matches these settings.
- **Naming Conventions**:
  - **Files**: `kebab-case` (e.g., `medication-log.component.ts`)
  - **Classes**: `PascalCase` (e.g., `MedicationLogComponent`)
  - **Methods/Vars**: `camelCase` (e.g., `logDose`)
  - **Constants**: `UPPER_SNAKE_CASE` (e.g., `MAX_DAILY_DOSES`)

### 3.4 Error Handling

- Use `try-catch` blocks for async/await operations.
- For HTTP errors, use global error handling or service-level catching/re-throwing with meaningful messages.
- Do not swallow errors silently. Log them or display user feedback.

### 3.5 Example Component

Follow this template for new components:

```typescript
import { Component, signal, inject } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-dose-button",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      @if (hasTaken()) {
        <p>Great job taking your meds!</p>
      } @else {
        <button (click)="takeDose()">Take Medicine</button>
      }
    </div>
  `,
  styles: [
    `
      .container {
        padding: 1rem;
      }
    `,
  ],
})
export class DoseButtonComponent {
  // State
  readonly hasTaken = signal(false);

  // Actions
  takeDose(): void {
    this.hasTaken.set(true);
    // TODO: logic to share on X
  }
}
```

## 4. Operational Rules for Agents

### 4.1 Development Workflow

1. **Analyze**: Read existing code (`src/app/`) to understand context.
2. **Verify**: Check `package.json` in `src/` for dependencies.
3. **Implement**: Write code following the styles above.
4. **Test**:
   - Always create or update `*.spec.ts` files for new logic.
   - Run `ng test --include "..."` to verify your specific changes.
   - Run `pnpm test` to ensure no regressions.

### 4.2 File System Constraints

- Do not create files outside of `src/` (the inner src).
- Do not modify configuration files (`angular.json`, `tsconfig.json`) unless explicitly requested.

### 4.3 Communication

- **Language**: All interactions with the user MUST be in **Japanese**.
- **Code Comments**: Keep code comments and internal documentation in English to maintain standard coding practices, unless explicitly requested otherwise.

### 4.4 Git Operations

- **Commit**: NEVER create a git commit unless explicitly requested by the user.
- **Push**: NEVER push to a remote repository unless explicitly requested by the user.

## 5. Directory Structure Reference

```txt
.
├── AGENTS.md          # This file
├── README.md          # Project documentation
└── src/               # WORKDIR ROOT
    ├── angular.json
    ├── package.json
    ├── pnpm-lock.yaml
    └── src/           # Application Source
        ├── app/       # Components & Logic
        ├── assets/    # Static files
        ├── styles.css # Global styles
        └── main.ts    # Entry point
```

---

_Generated for AI Agents interacting with the Good Dose Drug Button repository._
