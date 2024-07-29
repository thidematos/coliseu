export function createLocationMap(location) {
  let link = {};

  switch (location.pathname) {
    case "/admin/overview/novo-projeto":
      link.string = "Visão geral";
      link.to = "/admin/overview";

      break;

    case "/admin/overview":
      link.string = "Novo projeto";
      link.to = "/admin/overview/novo-projeto";

      break;

    default:
      link.string = "Novo projeto";
      link.to = "/admin/overview/novo-projeto";
  }

  return link;
}
