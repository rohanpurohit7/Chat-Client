# Deployment Guide

## Local Development

```powershell
npm install
npm run start
```

Run with:

- Expo Go on a physical device
- Android emulator
- iOS simulator on macOS
- Web preview with `npm run web`

## Android

```powershell
npm run android
```

For production builds, use Expo Application Services:

```powershell
npx eas build --platform android
```

## iOS

```powershell
npm run ios
npx eas build --platform ios
```

An Apple developer account and macOS/iOS signing setup are required for production iOS distribution.

## Web

```powershell
npm run web
```

## Backend Deployment Notes

The current transport is a mock service. For production chat:

1. Deploy a WebSocket backend.
2. Store the backend URL in environment configuration.
3. Replace `ChatService.send()` with WebSocket send/receive handling.
4. Add reconnect, retry, auth token, and offline-state handling.
