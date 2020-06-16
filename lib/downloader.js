export default class FileDownloader {
  static downloadFileAsPdf(blob, fileName) {
    return FileDownloader.downloadFileAs(blob, 'application/pdf', fileName)
  }

  static downloadFileAs(blob, type, fileName = 'Download.pdf') {
    return new Promise((resolve, reject) => {
      try {
        const file = new Blob([blob], { type: type })
        const fileReader = new FileReader()

        fileReader.addEventListener('load', () => {
          const b64Result = fileReader.result
            .toString()
            .replace('data:application/pdf;base64,', '')
          const byteCharacters = this.base64ToArrayBuffer(b64Result)
          this.saveByteArray([byteCharacters], fileName)
          resolve()
        })
        fileReader.readAsDataURL(file)
      } catch (error) {
        reject(error)
      }
    })
  }

  static base64ToArrayBuffer(base64) {
    var binaryString = window.atob(base64)
    var binaryLen = binaryString.length
    var bytes = new Uint8Array(binaryLen)
    for (var i = 0; i < binaryLen; i++) {
      var ascii = binaryString.charCodeAt(i)
      bytes[i] = ascii
    }
    return bytes
  }

  static saveByteArray(data, name) {
    var a = document.createElement('a')
    a.style.display = 'none'
    document.body.appendChild(a)
    var blob = new Blob(data, { type: 'application/pdf' })
    var url = window.URL.createObjectURL(blob)
    a.href = url
    a.download = name
    a.click()
    window.URL.revokeObjectURL(url)
  }
}
