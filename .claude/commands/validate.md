Run the full CyberUI validation pipeline and report results.

Execute the following commands **in order**, stopping on first failure:

```bash
npm run lint
```
```bash
npm run type-check
```
```bash
npm test -- --reporter=verbose --project=unit
```

For each step:
- Report **PASS** or **FAIL**
- On FAIL: show the exact error output, diagnose the root cause, and propose a fix
- Do NOT auto-fix without asking — present the diagnosis first

If all three pass, output a single "All checks passed." confirmation.
