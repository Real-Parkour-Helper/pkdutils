# For org members

## Git Workflow

### Branches

- `main` branch contains the latest stable version of the codebase.
- `test` branch contains the latest changes that are untested/in the process of being tested.
- `feat/feature-name` `chore/chore-name`, `fix/fix-name` and contain, well, features, chores, and fixes respectively. They are created from `main` branch, merged into `test` branch, and then merged into `main` branch when the testing of the respective feature is complete.

### Commit Messages

#### General structure

```
<type>(<optional scope>): <description>

[optional body]
```

#### Commit Types

| Type              | Description                                                                       |
| ----------------- | --------------------------------------------------------------------------------- |
| `feat`            | A new feature. Increments a minor version (0.Y.0)                                 |
| `fix`             | A bug fix. Increments a patch version (0.0.Z)                                     |
| `docs`            | Documentation only changes                                                        |
| `style`           | Changes that do not affect the meaning of the code (white-space, formatting, etc) |
| `refactor`        | A code change that neither fixes a bug nor adds a feature                         |
| `perf`            | A code change that improves performance                                           |
| `test`            | Adding missing tests or correcting existing tests                                 |
| `chore`           | Changes to the build process or auxiliary tools and libraries                     |
| `BREAKING CHANGE` | Backward incompatible changes. Increments a major version (X.0.0)                 |
