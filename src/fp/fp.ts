const compose = (...fns: any[]) => (value: any) => fns.reduceRight((acc, fn) => fn(acc), value);

export { compose };
