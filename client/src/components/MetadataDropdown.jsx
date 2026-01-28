import { useMemo, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
} from "reactstrap";

export default function MetadataDropdown({ meta, onSelect }) {
  // meta shape example:
  // {
  //   discipline: ["ai", "ml", "security"],
  //   tech: ["react", "mongodb", "docker"],
  //   skill: ["api-design", "indexing"]
  // }

  const groups = useMemo(() => Object.entries(meta || {}), [meta]);

  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);

  const toggleDropdown = () => setIsOpen((v) => !v);

  const toggleGroup = (groupName) => {
    setOpenGroup((cur) => (cur === groupName ? null : groupName));
  };

  return (
    <Dropdown isOpen={isOpen} toggle={toggleDropdown}>
      <DropdownToggle caret>Filter by tag</DropdownToggle>

      <DropdownMenu style={{ minWidth: 280 }}>
        {groups.map(([groupName, tags]) => {
          const safeTags = Array.isArray(tags) ? tags : [];
          const expanded = openGroup === groupName;

          return (
            <div key={groupName}>
              <DropdownItem
                toggle={false} // keep menu open when clicking header
                onClick={() => toggleGroup(groupName)}
                style={{ fontWeight: 700 }}
              >
                {expanded ? "[-] " : "[+] "}
                {groupName}
              </DropdownItem>

              <Collapse isOpen={expanded}>
                {safeTags.length ? (
                  safeTags.map((tag) => (
                    <DropdownItem
                      key={`${groupName}:${tag}`}
                      toggle={true} // clicking a tag closes dropdown
                      onClick={() => onSelect({ group: groupName, tag })}
                      style={{ paddingLeft: 24 }}
                    >
                      {tag}
                    </DropdownItem>
                  ))
                ) : (
                  <DropdownItem toggle={false} disabled style={{ paddingLeft: 24 }}>
                    (none)
                  </DropdownItem>
                )}
              </Collapse>

              <DropdownItem divider />
            </div>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
}
