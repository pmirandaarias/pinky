// Create dynamic routing for products
exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  if (page.path === `/`) {
    page.matchPath = `/*`
    createPage(page)
  }

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  // if (page.path.match(/^\/Homemade/)) {
  //   page.matchPath = `/Homemade/*`

  //   // Update the page.
  //   createPage(page)
  // }
  // if (page.path.match(/^\/Homemade/)) {
  //   page.matchPath = '/Homemade/*';
  //   createPage(page);
  // }
}
