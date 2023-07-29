function DadaResolver() {
  return (componentName) => {
    if (componentName.startsWith('Dada')) {
      const name = componentName.substring(4)
      return {
        from: `@dada-element/components/src/components/${name}/${name}.vue`,
      }
    }
  }
}

module.exports = {
  DadaResolver,
}
