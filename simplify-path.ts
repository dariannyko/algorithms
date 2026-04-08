function simplifyPath(path: string): string {
  const res: string[] = [];

  for (let part of path.split("/")) {
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

simplifyPath("/home/user/Documents/../../usr/local/bin"); // /home/usr/local/bin
