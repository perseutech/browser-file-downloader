export interface FileDownloader {
  static downloadFileAsPdf(blob: Blob, fileName: ?string): Promise<void>
  static downloadFileAs(
    blob: Blob,
    type: string,
    fileName: string = 'Download.pdf'
  ): Promise<void>
  static base64ToArrayBuffer(base64: string): ArrayBuffer
  static saveByteArray(data: BlobPart[], name: string): void
}

declare const FileDownloader: FileDownloader

export default FileDownloader
