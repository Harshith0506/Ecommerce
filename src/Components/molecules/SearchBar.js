import React from "react";
import * as IconStories from "../../stories/Icons.stories";
import * as InputStories from "../../stories/Input.stories";
import * as ButtonStories from "../../stories/Button.stories";
import Input from "../atoms/Input";

const SearchBar = () => {
  return (
    <div className="flex space-x-4 mt-5 justify-end mr-4">
      <div className="-mt-1 px-2 ml-4 py-1 space-x-2 flex items-center justify-between rounded-md  ">
        <div className="flex pointer-events-none items-center inset-y-0">
          <IconStories.SearchIcon />
        </div>
        <div className="flex-1 ">
          <Input />
        </div>
      </div>
      <div className="flex space-x-2">
        <IconStories.UserIcon />
        <h1 className="text-base font-medium">User</h1>
      </div>

      <div className="flex space-x-2">
        <IconStories.CartIcon />
        <h1 className="text-base font-medium">Cart</h1>
      </div>
    </div>
  );
};

export default SearchBar;
