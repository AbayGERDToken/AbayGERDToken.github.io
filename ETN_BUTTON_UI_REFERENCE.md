# ETN Login Button - UI Reference

## Button Appearance

The ETN Identity login button has been added to the auth page alongside the existing Google and Facebook buttons.

### Visual Layout

```
┌─────────────────────────────────────────────┐
│                                             │
│         Welcome to GERD Token               │
│     Sign in to access your wallet and       │
│       claim tokens                          │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │ 🔵 Continue with Google               │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │ 🔵 Continue with Facebook             │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │ 👤 Continue with ETN Identity (NEW)   │ │  ← New Button
│  └───────────────────────────────────────┘ │
│                                             │
├─────────────────────────────────────────────┤
│ 🔒 Your credentials are secured with       │
│    industry-standard authentication        │
└─────────────────────────────────────────────┘
```

## Button Properties

```
Button Element:
├─ Text: "Continue with ETN Identity"
├─ Icon: Font Awesome fingerprint icon 👤
├─ Color: #3668FF (ETN brand blue)
├─ State: 
│  ├─ Normal: Click to start login
│  ├─ Loading: "Connecting..." with spinner
│  └─ Disabled: When authentication in progress
└─ Position: Third option in login options
```

## User Interaction Flow

### Step 1: User Sees Button
```
Auth Page loads
    ↓
Three authentication options visible:
    - Google
    - Facebook
    - ETN Identity (NEW) ← User sees this
```

### Step 2: User Clicks Button
```
User clicks "Continue with ETN Identity"
    ↓
Button shows "Connecting..." with spinner
    ↓
User is redirected to ETN Identity Provider
```

### Step 3: Authentication at ETN
```
ETN Login Page loads
    ↓
User enters credentials
    ↓
(Optional: 2FA/MFA if enabled)
    ↓
User approves scopes (openid, profile, offline_access)
    ↓
ETN redirects back with authorization code
```

### Step 4: Session Created
```
Backend processes callback
    ↓
Validates code and exchanges for tokens
    ↓
Fetches user information
    ↓
Creates secure session cookie
    ↓
Redirects back to /auth
```

### Step 5: User Logged In
```
Auth page reloads
    ↓
ETNAuthContext reads session
    ↓
UI shows:
    "✓ ETN Identity Connected!"
    "Account ID: [user_address]"
    "[Copy] [Proceed to Claim Form] [Disconnect]"
```

## Button States

### Default State
```
┌─────────────────────────────────────┐
│ 👤 Continue with ETN Identity       │
└─────────────────────────────────────┘
```
- Cursor: pointer
- Background: #3668FF (blue)
- Text: white
- Clickable

### Loading State
```
┌─────────────────────────────────────┐
│ ⟳ Connecting...                     │
└─────────────────────────────────────┘
```
- Cursor: wait
- Background: lighter blue (disabled)
- Text: white
- Not clickable
- Spinner animation

### Disabled State
```
┌─────────────────────────────────────┐
│ 👤 Continue with ETN Identity       │
└─────────────────────────────────────┘  (grayed out)
```
- Cursor: not-allowed
- Opacity: reduced
- Not clickable
- Shows when other auth in progress

### After Success
Button disappears, replaced with:
```
┌──────────────────────────────────────┐
│ ✓ ETN Identity Connected!            │
│                                      │
│ Account ID: 0x1234567890ab...       │
│ [Copy Button]                        │
│                                      │
│ [→ Proceed to Claim Form]            │
│ [← Disconnect]                       │
└──────────────────────────────────────┘
```

## Button Styling Details

### CSS Classes Applied
```tsx
className={styles.loginButton}
style={{ backgroundColor: '#3668FF' }}
```

### Responsive Behavior
- Mobile: Full width
- Tablet: Full width or stacked
- Desktop: Inline with other buttons

## Accessibility Features

- ✅ Semantic button element
- ✅ Clear, descriptive text
- ✅ Icon + text for clarity
- ✅ Proper disabled state
- ✅ Loading feedback
- ✅ Keyboard accessible
- ✅ Screen reader friendly

## Disabled Reasons

Button is automatically disabled when:

1. **Already Logging In**
   - Another authentication method is in progress
   - Reason: Prevent concurrent login attempts

2. **Loading**
   - `etnIsLoading === true`
   - Reason: User should wait for redirect

3. **Not Configured**
   - Missing environment variables
   - Reason: Cannot complete authentication flow

## Error Display

If authentication fails:

```
┌─────────────────────────────────────┐
│ ⚠️  Error: [Error Message]          │
│                                     │
│ - Invalid credentials               │
│ - Network timeout                   │
│ - Redirect URI mismatch             │
│ - Missing configuration             │
│                                     │
│ [Retry] [← Back to Login]          │
└─────────────────────────────────────┘
```

## Code Implementation

```tsx
// From app/auth/page.tsx
<button
  className={styles.loginButton}
  onClick={etnSignIn}
  disabled={etnIsLoading}
  style={{ backgroundColor: '#3668FF' }}
>
  {etnIsLoading ? (
    <>
      <i className="fas fa-spinner fa-spin me-2"></i>
      Connecting...
    </>
  ) : (
    <>
      <i className="fas fa-fingerprint me-2"></i>
      Continue with ETN Identity
    </>
  )}
</button>
```

## Color Scheme

```
ETN Button Color: #3668FF (Indigo/Blue)
├─ Normal state: #3668FF
├─ Hover state: lighter shade
├─ Active state: darker shade
├─ Disabled state: grayed out
└─ Icon color: inherit from text (white)

Google Button Color: #EA4335 (Red)
Facebook Button Color: #1877F2 (Blue)
ETN Button Color: #3668FF (Indigo) ← Distinct from Google/Facebook
```

## Responsive Breakpoints

```
Mobile (<768px):
  - Full width button
  - Stacked vertically
  - Padding: 12px 16px
  - Font size: 14px

Tablet (768px-1024px):
  - Full width button
  - Stacked vertically
  - Padding: 14px 18px
  - Font size: 15px

Desktop (>1024px):
  - Full width button
  - In login options container
  - Padding: 15px 20px
  - Font size: 16px
```

## Icon Details

- **Font Awesome Icon**: `fa-fingerprint`
- **Icon Size**: Inherits from parent
- **Icon Margin**: `me-2` (margin-end: 0.5rem)
- **Icon Animation**: Spin when loading

## Text Details

- **Normal Text**: "Continue with ETN Identity"
- **Loading Text**: "Connecting..."
- **Font Weight**: Medium (500)
- **Text Align**: Left with icon
- **Case**: Sentence case (only first word capitalized)

## Examples in Different States

### Example 1: Initial Page Load
```
┌─────────────────────────────────────┐
│ Welcome to GERD Token               │
│                                     │
│ [Google Button]                     │
│ [Facebook Button]                   │
│ [ETN Identity Button] ← user sees   │
└─────────────────────────────────────┘
```

### Example 2: User Clicks ETN Button
```
┌─────────────────────────────────────┐
│ Welcome to GERD Token               │
│                                     │
│ [Google Button] (disabled)          │
│ [Facebook Button] (disabled)        │
│ [⟳ Connecting...] ← spinning       │
└─────────────────────────────────────┘
     ↓
     [Redirects to ETN Provider]
```

### Example 3: After Successful Login
```
┌─────────────────────────────────────┐
│ ✓ ETN Identity Connected!           │
│                                     │
│ Account ID: 0x1234567890ab...      │
│ [Copy]                              │
│                                     │
│ [→ Proceed to Claim Form]           │
│ [← Disconnect]                      │
└─────────────────────────────────────┘
```

## Technical Notes

- Button uses Next.js router for redirects
- Loading state managed by `etnIsLoading` from context
- Click handler calls `etnSignIn()` which redirects
- No form submission - direct window.location redirect
- Session automatically read after OAuth callback
- Works with both development and production URLs
