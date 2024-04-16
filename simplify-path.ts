function simplifyPath(path: string): string {
  const pathArr = path.split("/");
  const res: string[] = [];

  for (let part of pathArr) {
    if (!part || part == ".") {
      continue;
    }
    if (part == "..") {
      res.pop();
      continue;
    }
    res.push(part);
  }

  return `/${res.join("/")}`;
}

simplifyPath("/a/./b/../../c/"); // /c
simplifyPath("/home/user/Documents/../../usr/local/bin"); // /home/usr/local/bin
