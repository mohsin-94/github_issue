import { MdOutlineSecurity, MdOutlineShowChart } from "react-icons/md";
import {
  GoCode,
  GoIssueOpened,
  GoGitPullRequest,
  GoPlay,
  GoBook,
  GoProject,
} from "react-icons/go";

export const listItem = [
  {
    id: 1,
    name: "Code",
    icon: <GoCode />,
  },
  {
    id: 2,
    name: "Issue",
    icon: <GoIssueOpened />,
    issue: <span className="icon__issue">650</span>,
  },
  {
    id: 3,
    name: "Pull request",
    icon: <GoGitPullRequest />,
    issue: <span className="icon__issue">200</span>,
  },
  {
    id: 4,
    name: "Action",
    icon: <GoPlay />,
  },
  {
    id: 5,
    name: "Project",
    icon: <GoProject />,
  },
  {
    id: 6,
    name: "Wiki",
    icon: <GoBook />,
  },
  {
    id: 7,
    name: "Security",
    icon: <MdOutlineSecurity />,
  },
  {
    id: 8,
    name: "Insight",
    icon: <MdOutlineShowChart />,
  },
];

export const innerList = [
  {
    id: 1,
    name: "Author",
  },
  {
    id: 2,
    name: "Label",
  },
  {
    id: 3,
    name: "Project",
  },
  {
    id: 4,
    name: "Milestone",
  },
  {
    id: 5,
    name: "Assignee",
  },
  {
    id: 6,
    name: "Sort",
  },
];
