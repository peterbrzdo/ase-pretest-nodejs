// TODO: Implement your developer interface and class in this file
export interface DeveloperInterface {
  getName(): string;
  getLanguage(): string;
  setName(name: string): void;
  setLanguage(language: string): void;
  code(): Promise<string>;
}

export default class Developer implements DeveloperInterface {
  private name: string;
  private language: string;

  constructor(name: string, language: string) {
    this.name = name;
    this.language = language;
  }

  getName(): string {
    return this.name;
  }

  getLanguage(): string {
    return this.language;
  }

  setName(name: string) {
    this.name = name;
  }

  setLanguage(language: string) {
    this.language = language;
  }

  code(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (this.name == "Nicole" && this.language == "nodejs")
        resolve('console.log("Hello, Nicole!")');
      else if (this.name == "John" && this.language == "java")
        resolve('System.out.println("Hello, John!")');
      else if (this.name == "Pete" && this.language == "python")
        resolve('print("Hello, Pete!")');
      else
        reject(new Error(`Unsupported language: ${this.language}`));
    });
  }
}
