import React from "react"

const ManageAccount: React.FC = () => {
  return (
    <div>
      <div className="flex min-h-screen bg-gray-100 p-8">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Manage Account</h1>
          <section>
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-2">Currency</h2>
              <label className="block font-medium mb-2" htmlFor="currency">Change currency here:</label>
              <select id="currency" className="border rounded-md w-full p-2 mb-4">
                <option value="dollar">$Dollar</option>
                <option value="euro">€Euro</option>
                <option value="yen">¥Yen</option>
                <option value="pound">£Pound</option>
              </select>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Confirm Currency</button>
    <div className="flex min-h-screen bg-gray-100 p-8">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Manage Account</h1>
          <div className="flex items-center">
            <button className="mr-4">Dark/Light Mode settings</button>
            <button className="flex items-center">
              <span>Profile</span>
              <img src="/path-to-profile-icon.png" alt="Profile Icon" className="ml-2 w-6 h-6" />
            </button>
          </div>
        </header>
        <nav className="flex mb-8 space-x-4">
          <a href="/dashboard" className="text-blue-500 hover:underline">Dashboard</a>
          <a href="/transactions" className="text-blue-500 hover:underline">Transactions</a>
          <a href="/manage-profile" className="text-blue-500 hover:underline">Manage Profile</a>
        </nav>
        <section>
          <div className="mb-12">
            <label className="block font-medium mb-2" htmlFor="currency">Currency</label>
            <input id="currency" className="border rounded-md w-full p-2 mb-4" type="text" placeholder="$Dollar, €Euro, £Pound..." />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Confirm Currency</button>
          </div>
          <div className="mb-12">
            <h2 className="text-lg font-semibold mb-4">Income Categories</h2>
            <div className="grid grid-cols-3 gap-6 mb-4">
              <div className="bg-gray-200 p-4 rounded-md flex justify-between items-center">
                <span>Category 1</span>
                <button className="text-red-500">Delete</button>
              </div>
              <div className="bg-gray-200 p-4 rounded-md flex justify-between items-center">
                <span>Category 2</span>
                <button className="text-red-500">Delete</button>
              </div>
              <div className="bg-gray-200 p-4 rounded-md flex justify-between items-center">
                <span>Category 3</span>
                <button className="text-red-500">Delete</button>
              </div>
            </div>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md">Create New Category</button>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Expenses Categories</h2>
            <div className="grid grid-cols-3 gap-6 mb-4">
              <div className="bg-gray-200 p-4 rounded-md flex justify-between items-center">
                <span>Category 1</span>
                <button className="text-red-500">Delete</button>
              </div>
              <div className="bg-gray-200 p-4 rounded-md flex justify-between items-center">
                <span>Category 2</span>
                <button className="text-red-500">Delete</button>
              </div>
              <div className="bg-gray-200 p-4 rounded-md flex justify-between items-center">
                <span>Category 3</span>
                <button className="text-red-500">Delete</button>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Expenses Categories</h2>
                <button className="px-4 py-2 bg-green-500 text-white rounded-md">Create New Category</button>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-gray-200 p-4 rounded-md flex justify-center items-center">
                  <span>Category 1</span>
                </div>
                <div className="bg-gray-200 p-4 rounded-md flex justify-center items-center">
                  <span>Category 2</span>
                </div>
                <div className="bg-gray-200 p-4 rounded-md flex justify-center items-center">
                  <span>Category 3</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-2">
                <button className="text-red-500">Delete</button>
                <button className="text-red-500">Delete</button>
                <button className="text-red-500">Delete</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ManageAccount
