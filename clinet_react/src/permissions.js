// permissions.js

export const checkMenuPermission = (
  permissions,
  menuKey,
  action = 'view',
  submenuKey = null,
) => {
  if (!permissions.menu[menuKey]) return false

  if (submenuKey) {
    if (
      permissions.menu[menuKey].submenus &&
      permissions.menu[menuKey].submenus[submenuKey]
    ) {
      return permissions.menu[menuKey].submenus[submenuKey][action] ?? false
    } else {
      return false
    }
  }

  return permissions.menu[menuKey][action] ?? false
}

export const checkActionPermission = (
  permissions,
  menuKey,
  actionKey,
  submenuKey = null,
) => {
  return checkMenuPermission(permissions, menuKey, actionKey, submenuKey)
}

/* {checkActionPermission(permissions, 'settings', 'edit', 'users') && (
    <button className="action-button">Edit Users</button>
  )}
   */
