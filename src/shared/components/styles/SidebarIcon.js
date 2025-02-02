import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AboutIcon from "assets/icons/about.svg";
import AdminIcon from "assets/icons/admin.svg";
import AuditsIcon from "assets/icons/audits.svg";
import BellIcon from "assets/icons/bell.svg";
import BundlesIcon from "assets/icons/bundles.svg";
import ClustersIcon from "assets/icons/clusters.svg";
import CogIcon from "assets/icons/cog.svg";
import FolderIcon from "assets/icons/folder.svg";
import Graph from "assets/icons/graph.svg";
import LogoutIcon from "assets/icons/logout.svg";
import NodesIcon from "assets/icons/nodes.svg";
import OverlordIcon from "assets/icons/overlord.svg";
import OverviewIcon from "assets/icons/overview.svg";
import ProjectIcon from "assets/icons/project.svg";
import RolesIcon from "assets/icons/roles.svg";
import TeamsIcon from "assets/icons/teams.svg";
import WorkspacesIcon from "assets/icons/workspaces.svg";
import TerraformIcon from "assets/icons/terraform.svg";

// TODO: Sure Codrin knows a better way than adding them manually

const icons = {
  about: <AboutIcon />,
  admin: <AdminIcon />,
  audits: <AuditsIcon />,
  bell: <BellIcon />,
  bundles: <BundlesIcon />,
  clusters: <ClustersIcon />,
  cog: <CogIcon />,
  folder: <FolderIcon />,
  graph: <Graph />,
  logout: <LogoutIcon />,
  nodes: <NodesIcon />,
  overlord: <OverlordIcon />,
  overview: <OverviewIcon />,
  project: <ProjectIcon />,
  roles: <RolesIcon />,
  teams: <TeamsIcon />,
  workspaces: <WorkspacesIcon />,
  terraform: <TerraformIcon />
};

function SidebarIcon({ type }) {
  if (!Object.keys(icons).includes(type)) {
    return <FontAwesomeIcon icon={type} />;
  }

  return icons[type];
}

export default SidebarIcon;
