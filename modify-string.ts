//TODO: рефактор
const lang = ["a", "b", "c"];

function modifyString(s: string): string {
  const str_arr = s.split("");

  for (let i = 0; i < str_arr.length; i++) {
    if (str_arr[i] === "?") {
      const prev = str_arr[i - 1] || "";
      const next = str_arr[i + 1] || "";

      const new_char = lang.find((char) => char !== prev && char !== next);

      str_arr[i] = new_char;
    }
  }

  return str_arr.join("");
}
