# Hasher App

## Introduction

Standalone version for https://s12v.github.io/hasher/

The app is used to compute cryptographic hashes and perform conversions. 
It is useful for programmers and system administrators. 
The app is implemented in JavaScript. All calculations are performed on the client side.

* <b>Hash</b>: MD5, SHA-1, SHA-2 (224, 256, 384, 512), RIPEMD-160, MD4, Whirpool
* <b>HMAC:</b> MD5, SHA-1, SHA-2 (224, 256, 384, 512), RIPEMD-160, MD4
* <b>CRC:</b> CRC-8, CRC-16, FCS-16, FCS/CRC-32
* <b>Cipher</b> <i>(interoperable with OpenSSL)</i>: AES-256, DES, Triple DES, Rabbit, RC4, RC4Drop. CBC/Pkcs7 is used.
* <b>Net:</b> Subnet calculator, Ip ↔ Dec, Ip → Bin, Ip → Hex
* <b>Time:</b> Unix ↔ Datetime, Unix ↔ RFC-1123, Unix ↔ ISO 8601
* <b>Numbers:</b> Dec ↔ Hex, Dec ↔ Bin, Dec ↔ Roman
* <b>Strings:</b> ASCII ↔ Hex, UTF-8 ↔ Hex, UTF-16 ↔ Hex
* <b>Encode:</b> Base64, ROT-13, JavaScript encodeURI(), encodeURIComponent(), HTML special chars encode/decode

## Development

This app is built with Nodejs + Electron, you'd better know this if you want to make some changes. For MacOS(Intel chip, not M series), you need to install [Wine](https://www.winehq.org/) to make it work for Windows platform. I use `gcenx/wine` as a wrapper for Wine, cuz it avoids some problems like [CreateZipFromDirectory exception on macOS](https://github.com/Squirrel/Squirrel.Windows/issues/1605).

**Install Wine via Homebrew:**

```bash
brew tap gcenx/wine
brew install --cask --no-quarantine wine-crossover
```
