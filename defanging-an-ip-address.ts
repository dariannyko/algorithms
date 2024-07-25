function defangIPaddr(address: string): string {
  return address.replaceAll(".", "[.]");
}

defangIPaddr("255.100.50.0");
