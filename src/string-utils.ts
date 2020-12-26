var decoder = new TextDecoder("utf-8");

export function ab2str(buffer: ArrayBuffer) {
  return decoder.decode(buffer);
}

var encoder = new TextEncoder();

export function str2ab(str: string): ArrayBuffer {
  return encoder.encode(str);
}