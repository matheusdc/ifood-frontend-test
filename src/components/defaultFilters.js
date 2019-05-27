const defaultFilters = () => {
  const locale = navigator.language.replace('-', '_');
  const [, country] = locale.split('_');
  const timestamp = new Date().toISOString();

  return {
    locale,
    country,
    timestamp,
    offset: 0,
    limit: 9,
  };
};

export default defaultFilters;
