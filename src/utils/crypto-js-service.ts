import * as CryptoJS from "crypto-js";

export class CryptoJsService {
  static encrypt(data: string): string {
    return CryptoJS.AES.encrypt(
      data,
      process.env.NEXT_PUBLIC_CRYPTO_JS_SECRET_KEY as string
    ).toString();
  }

  static decrypt(encryptedData: string): string | any {
    const bytes = CryptoJS.AES.decrypt(
      encryptedData,
      process.env.NEXT_PUBLIC_CRYPTO_JS_SECRET_KEY as string
    );
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
