# Finding 002 — Registration Validation Weaknesses

## Severity

Low / Medium — Frontend Validation Weakness

## Status

Confirmed

## Target

BugBoard Registration

## Summary

The BugBoard registration form does not enforce username or email uniqueness and accepts extremely weak passwords.

## Confirmed Tests

### Test 1 — Duplicate Username

An account using username `marttest` was registered.

A second registration using the same username with a different email was accepted.

Observed result:

    Registration successful

### Test 2 — Duplicate Email

A second registration using a different username but the same email address was accepted.

Observed result:

    Registration successful

### Test 3 — Weak Password

A registration using the one-character password:

    1

was accepted.

Observed result:

    Registration successful

## Technical Evidence

The registration JavaScript only checks whether the fields are empty:

    if (usernameInput.value === ""){
        registerMessage.textContent = "Username is required"
        return;
    }

    if (emailInput.value === ""){
        registerMessage.textContent = "Email is required";
        return;
    }

    if (passwordInput.value === ""){
        registerMessage.textContent = "Password is required";
        return;
    }

No checks exist for:

- Duplicate usernames
- Duplicate email addresses
- Minimum password length
- Password strength
- Common passwords
- Backend validation

## Impact

The current frontend allows users to submit duplicate identity information and extremely weak passwords.

Because the application currently has no registration backend, these tests confirm a frontend validation weakness rather than a database-level vulnerability.

## Security Lesson

Client-side validation should not be treated as the security boundary.

Once the BugBoard backend and database are implemented, username and email uniqueness and password policy must be enforced server-side.

## Lab Status

Confirmed in the intentionally vulnerable BugBoard training application.

No production system was tested.
