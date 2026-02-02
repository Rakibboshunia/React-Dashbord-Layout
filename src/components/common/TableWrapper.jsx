export default function TableWrapper({ title, actionSlot, children }) {
  return (
    <div className="bg-white border rounded-xl mt-10">
      <div className="flex justify-between items-center px-6 py-6 border-b">
        <h3 className=" font-semibold text-xl text-gray-800">{title}</h3>
        {actionSlot}
      </div>
      <div className="overflow-x-auto">{children}</div>
    </div>
  );
}
