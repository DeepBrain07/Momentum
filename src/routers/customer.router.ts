import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../templates/AboutUs/AboutUs";
import Landing from "../templates/Landing/Landing";
import Careers from "../templates/Careers/Careers";
import ContactUs from "../templates/ContactUs/ContactUs";
import HealthCareConsulting from "../templates/HealthCareConsulting/HealthCareConsulting";
import Articles from "../templates/Articles/Articles";
import Author from "../templates/Author/Author";
import MedicalTourism from "../templates/MedicalTourism/MedicalTourism";
import HealthMediaManagement from "../templates/HealthMediaManagement/HealthMediaManagement";
import Academy from "../templates/Academy/Academy";
import Services from "../templates/Services/Services";
import Resources from "../templates/Resources/Resources";

export const CustomerRoutePaths = {
  Customer: {
    Landing: "/",
    AboutUs: "/about-us",
    Articles: {
      Index: "/articles",
      // View: (articleId: string) => `/articles/${articleId}`,
    },
    Authors: {
      View: (authorId: string) => `/authors/${authorId}`,
    },
    Article: {
      View: (articleId: string) => `/articles/${articleId}`,
    },
    Services: "/services",
    Careers: "/careers",
    ContactUs: "/contact-us",
    HealthCareConsulting: "/healthcare-consulting",
    HealthMediaManagement: "/healthmedia-management",
    MedicalTourism: "/medical-tourism",
    Academy: "/academy",
  },
};

export const CustomerRouter = createBrowserRouter([
  {
    path: CustomerRoutePaths.Customer.Landing,
    Component: Landing,
  },
  {
    path: CustomerRoutePaths.Customer.AboutUs,
    Component: AboutUs,
  },
  {
    path: CustomerRoutePaths.Customer.Article.View(":articleId"),
    Component: Articles,
  },
  {
    path: CustomerRoutePaths.Customer.Articles.Index,
    Component: Resources,
  },
  {
    path: "/authors",
    children: [
      {
        path: CustomerRoutePaths.Customer.Authors.View(":authorId"),
        Component: Author,
      },
    ],
  },
  {
    path: CustomerRoutePaths.Customer.Services,
    Component: Services,
  },
  {
    path: CustomerRoutePaths.Customer.Careers,
    Component: Careers,
  },
  {
    path: CustomerRoutePaths.Customer.ContactUs,
    Component: ContactUs,
  },
  {
    path: CustomerRoutePaths.Customer.HealthCareConsulting,
    Component: HealthCareConsulting,
  },
  {
    path: CustomerRoutePaths.Customer.HealthMediaManagement,
    Component: HealthMediaManagement,
  },
  {
    path: CustomerRoutePaths.Customer.MedicalTourism,
    Component: MedicalTourism,
  },
  {
    path: CustomerRoutePaths.Customer.Academy,
    Component: Academy,
  },
]);
