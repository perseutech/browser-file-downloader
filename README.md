# Browser File Downloader

A simple JavaScript module for download file from a Blob in the Browser-side.

## Installing

NPM:

```bash
npm install @perseu/browser-file-downloader
```

Yarn:

```bash
yarn add @perseu/browser-file-downloader
```

## Example

```js
import FileDownloader from '@perseu/browser-file-downloader'

await FileDownloader.downloadFileAsPdf(blob, fileName)
```

## API

### Methods

**downloadFileAsPdf(data, fileName)**

- `data: File|ArrayBuffer|Blob` the data object to be downloaded.
- `fileName: ?String` the name of the file that will be downloaded. The file extension type should to be explicit (e.g. `Download.pdf`). The default value is `Download`.
- `returns: Promise<void>`

  This method will download the `data` as a PDF file.

**downloadFileAs(data, type, fileName)**

- `data: File|ArrayBuffer|Blob` the data object to be downloaded.
- `type: ?String` the MIME type of the file. The default value is `text/plain`.
- `fileName: ?String` the name of the file that will be downloaded. The file extension type should to be explicit (e.g. `Download.pdf`). The default value is `Download`.
- `returns: Promise<void>`

  This method will download the `data` as specified in `type` parameter.

**downloadFile(blob, fileName)**

- `blob: Blob` the blob object to be downloaded.
- `fileName: String` the name of the file that will be downloaded. The file extension type should to be explicit (e.g. `Download.pdf`).
- `returns: void`

  This method will download the `blob` as a file. The file type should be informed on the Blob object.

**base64ToArrayBuffer(base64)**

- `base64: String` the base64 string to be converted.
- `returns: ArrayBuffer`

  This method will convert the `base64` string to a `ArrayBuffer` object.

## License

[MIT](LICENSE)
