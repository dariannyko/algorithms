function simplifyPath(path: string): string {
  const res: string[] = [];

  const splitted = path.split("/");

  for (const part of splitted) {
    if (!part || part === ".") continue;

    if (part === "..") {
      res.pop();
    } else {
      res.push(part);
    }
  }
  return `/${res.join("/")}`;
}

simplifyPath("/home/user/Documents/../../usr/local/bin"); // /home/usr/local/bin
