# BugBoard Authentication

## Purpose

Document the current authentication flow of the BugBoard training application.

## Registration

The registration form collects:

- Username
- Email
- Password

Current behavior:

1. Username is checked for an empty value.
2. Email is checked for an empty value.
3. Password is checked for an empty value.
4. Username is stored in browser localStorage.
5. No backend request is performed.

## Login

The login form collects:

- Username
- Password

Current behavior:

1. Username is checked for an empty value.
2. Username is compared with the value stored in localStorage.
3. Password is checked only for an empty value.
4. Password is not compared against a stored password.
5. No backend authentication request is performed.
6. Login success is displayed entirely by client-side JavaScript.

## Profile

The profile page currently displays static information:

- Username: Guest User
- Email: guest@bugboard.local
- Status: Not logged in

The profile page is not currently connected to the login state.

## Current Architecture

Browser
→ HTML
→ JavaScript
→ localStorage

There is currently no authentication API connection.

## Security-Relevant Observations

- Authentication logic is client-side.
- Username is stored in localStorage.
- Password is not actually authenticated.
- Profile information is static.
- No server-side session exists.
- No authentication API request exists.

## Testing Goals

Later testing should determine:

- Can authentication state be manipulated?
- Can the stored username be modified?
- Can login succeed with an incorrect password?
- Can protected functionality be accessed without authentication?
- Can client-side state be bypassed?
- What changes when a backend authentication system is introduced?

## Status

Authentication frontend: Built

Authentication backend: Not implemented

Security testing: Not started
