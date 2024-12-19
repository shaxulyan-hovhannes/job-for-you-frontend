import * as CryptoJS from "crypto-js";

export class CryptoJsService {
  private static encrypt(data: string, secret: string): string {
    return CryptoJS.AES.encrypt(data, secret as string).toString();
  }

  private static decrypt(encryptedData: string, secret: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secret as string);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  static encryptAccessToken(data: string) {
    return CryptoJsService.encrypt(
      data,
      process.env.NEXT_PUBLIC_CRYPTO_JS_ACCESS_TOKEN_SECRET_KEY as string
    );
  }

  static decryptAccessToken(data: string) {
    return CryptoJsService.decrypt(
      data,
      process.env.NEXT_PUBLIC_CRYPTO_JS_ACCESS_TOKEN_SECRET_KEY as string
    );
  }

  static encryptRefreshToken(data: string) {
    return CryptoJsService.encrypt(
      data,
      process.env.NEXT_PUBLIC_CRYPTO_JS_REFRESH_TOKEN_SECRET_KEY as string
    );
  }

  static decryptRefreshToken(data: string) {
    return CryptoJsService.decrypt(
      data,
      process.env.NEXT_PUBLIC_CRYPTO_JS_REFRESH_TOKEN_SECRET_KEY as string
    );
  }

  static encryptPhone(data: string) {
    return CryptoJsService.encrypt(
      data,
      process.env.NEXT_PUBLIC_CRYPTO_JS_PHONE_SECRET_KEY as string
    );
  }

  static decryptPhone(data: string) {
    return CryptoJsService.decrypt(
      data,
      process.env.NEXT_PUBLIC_CRYPTO_JS_PHONE_SECRET_KEY as string
    );
  }
}
