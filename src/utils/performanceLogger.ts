export const logPerformance = (componentName: string) => {
    console.log(`[Performance Log]: ${componentName} rendered at ${new Date().toISOString()}`);
  };
  