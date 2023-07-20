function DadaResolver() {
  return (componentName) => {
    if (componentName.startsWith("Dada")) {
      const name = componentName.substring(4);
      return {
        from: `@dada-element/components/src/${name}/${name}.vue`,
      };
    }
  };
}

export { DadaResolver };
