const VariantPicker = ({ variants, ...props }) => {
  if (variants.length === (0 || 1)) return null;

  return (
    <select
      {...props}
      className="appearance-none w-full relative mb-3 sm:mb-0 flex-grow sm:mr-3 pl-3 py-2 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 focus:border-gray-600 focus:dark:border-gray-500 shadow-sm text-gray-500 dark:text-gray-300 text-sm focus:outline-none focus:text-gray-900 focus:dark:text-gray-100 rounded"
    >
      {variants.map(({ external_id, name }) => (
        <option key={external_id} value={external_id}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default VariantPicker;
