# Finding 001 — Password Validation Bypass

## Severity

High

## Status

Confirmed

## Target

BugBoard Login

## Summary

The login functionality accepts any non-empty password when the username matches the value stored in browser localStorage.

## Steps to Reproduce

1. Register a test account.
2. Use username `marttest`.
3. Enter any email.
4. Enter any password.
5. Open the Login page.
6. Enter username `marttest`.
7. Enter an intentionally incorrect password.
8. Submit the login form.

## Observed Result

The application displays:

Login successful

even though the supplied password is incorrect.

## Expected Result

The application should reject the login attempt when the password does not match the account's password.

## Root Cause

The frontend JavaScript only checks whether the password field is empty.

A non-empty password is accepted without comparing it against an authenticated credential.

## Technical Evidence

The current login logic contains a presence check:

    if (passwordInput.value === "") {
        loginMessage.textContent = "Password is required";
        return;
    }

There is no password verification against a backend authentication service.

## Impact

An attacker who knows a valid username could potentially pass the application's client-side login check using any non-empty password.

Because authentication is entirely client-side, the login result cannot be trusted as proof of identity.

## Security Lesson

Authentication must be enforced server-side.

Client-side validation can improve user experience, but it must never be the security boundary.

## Lab Status

Confirmed in the intentionally vulnerable BugBoard training application.

No production system was tested.

## Runtime Verification

The vulnerability was reproduced through the BugBoard frontend.

Test account:

    Username: marttest

Test password:

    123

The application returned:

    Login successful

The supplied password was intentionally treated as an incorrect test password.

The browser console also showed the stored username and the login submission event.

This confirms that the frontend accepts any non-empty password after the username check succeeds.
