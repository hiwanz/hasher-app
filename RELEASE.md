# Release Guide

This document describes how to create and publish a release for hasher-app.

## Automated Release Process

The release workflow is fully automated via GitHub Actions. When you push a git tag matching `v*.*.*` format, the workflow automatically:

1. Builds the application for macOS and Windows
2. Generates installers and portable packages
3. Creates SHA256 checksums for each artifact
4. Publishes all artifacts to GitHub Releases

## Creating a Release

### Step 1: Update Version

Update the version in `package.json`:

```json
{
  "version": "1.1.3"
}
```

### Step 2: Commit Changes

```bash
git add package.json
git commit -m "chore: Bump version to 1.1.3"
```

### Step 3: Create Git Tag

Create an annotated git tag matching the version:

```bash
git tag -a v1.1.3 -m "Release version 1.1.3"
```

### Step 4: Push to GitHub

```bash
git push origin main
git push origin v1.1.3
```

This triggers the build workflow. Monitor progress on the [Actions page](https://github.com/hiwanz/hasher-app/actions).

### Step 5: Verify Release

Once the workflow completes:

1. Check the [Releases page](https://github.com/hiwanz/hasher-app/releases)
2. Verify all artifacts are present (macOS ZIP, Windows EXE, Windows ZIP, checksums)
3. Review generated release notes

## Workflow Details

### Build Artifacts

The workflow creates the following artifacts for each platform:

**macOS (Intel & Apple Silicon):**
- `Hasher-{version}.zip` - Application bundle
- `Hasher-{version}.zip.sha256` - SHA256 checksum

**Windows:**
- `hasher-app-{version}-full.exe` - Squirrel installer
- `hasher-app-{version}-delta.exe` - Squirrel delta update installer
- `hasher-{version}.zip` - Portable ZIP archive
- `hasher-{version}.zip.sha256` - SHA256 checksum
- `.exe.sha256` - Checksum for installers

### Version Validation

The workflow validates that the git tag version matches `package.json`. For example:
- Git tag: `v1.1.3`
- package.json: `"version": "1.1.3"`

If versions don't match, the build fails with a clear error message.

## Troubleshooting

### Build Failures

Check the [Actions logs](https://github.com/hiwanz/hasher-app/actions) for the failing workflow. Common issues:

- **Version mismatch**: Ensure git tag matches package.json version
- **Build errors**: Check the platform-specific build step logs
- **Dependencies**: Ensure yarn.lock is up to date: `yarn install --frozen-lockfile`

### Manual Rebuild

To rebuild without creating a new tag, use the `workflow_dispatch` trigger:

1. Go to [Actions page](https://github.com/hiwanz/hasher-app/actions)
2. Select "Build Release" workflow
3. Click "Run workflow"
4. Enter the version (e.g., `1.1.3`)

## Release Notes

Release notes are automatically generated from commits since the last release. You can customize them in the GitHub Release editor after creation.

## Artifact Verification

Users can verify artifact integrity using the SHA256 checksums:

```bash
# Download artifact and checksum
# Then verify:
sha256sum -c hasher-v1.1.3-darwin-x64.zip.sha256
```

## Future Enhancements

Potential improvements to the release process:

- [ ] Apple code signing and notarization for macOS
- [ ] Windows Authenticode signing for installer
- [ ] Automated changelog generation from commits
- [ ] Auto-publish to additional platforms (e.g., Homebrew, Chocolatey)
