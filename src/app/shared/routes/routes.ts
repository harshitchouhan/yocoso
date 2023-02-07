import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: "home",
    loadChildren: () => import("../../pages/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "dashboard",
    loadChildren: () => import("../../components/dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
    path: "customer-management",
    loadChildren: () => import("../../components/customer-management/customer-management.module").then((m) => m.CustomerManagementModule),
  },
  {
    path: "customer-details/:id",
    loadChildren: () => import("../../components/customer-details/customer-details.module").then((m) => m.CustomerDetailsModule),
  },
  {
    path: "user-management",
    loadChildren: () => import("../../components/user-management/user-management.module").then((m) => m.UserManagementModule),
  },
  {
    path: "user/add",
    loadChildren: () => import("../../components/user-details/user-details.module").then((m) => m.UserDetailsModule),
  },
  {
    path: "user-details/view/:id",
    loadChildren: () => import("../../components/user-details/user-details.module").then((m) => m.UserDetailsModule),
  },
  {
    path: "user-details/edit/:id",
    loadChildren: () => import("../../components/user-details/user-details.module").then((m) => m.UserDetailsModule),
  },
  {
    path: "routes-management",
    loadChildren: () => import("../../components/route-management/route-management.module").then((m) => m.RouteManagementModule),
  },
  {
    path: "route-details/edit/:id",
    loadChildren: () => import("../../components/routes-details/routes-details.module").then((m) => m.RoutesDetailsModule),
  },
  {
    path: "route-details/view/:id",
    loadChildren: () => import("../../components/routes-details/routes-details.module").then((m) => m.RoutesDetailsModule),
  },
  {
    path: "route/add",
    loadChildren: () => import("../../components/routes-details/routes-details.module").then((m) => m.RoutesDetailsModule),
  },
  {
    path: "orders-management",
    loadChildren: () => import("../../components/orders-management/orders-management.module").then((m) => m.OrdersManagementModule),
  },
  {
    path: "tracking-updates",
    loadChildren: () => import("../../components/tracking-updates/tracking-updates.module").then((m) => m.TrackingUpdatesModule),
  },
  {
    path: "notifications",
    loadChildren: () => import("../../components/notifications/notifications.module").then((m) => m.NotificationsModule),
  },
  {
    path: "insurance-management",
    loadChildren: () => import("../../components/insurance-management/insurance-management.module").then((m) => m.InsuranceManagementModule),
  },
  {
    path: "insurance-details/view/:id",
    loadChildren: () => import("../../components/insurance-details/insurance-details.module").then((m) => m.InsuranceDetailsModule),
  },
  {
    path: "insurance-details/edit/:id",
    loadChildren: () => import("../../components/insurance-details/insurance-details.module").then((m) => m.InsuranceDetailsModule),
  },
  {
    path: "insurance/add",
    loadChildren: () => import("../../components/insurance-details/insurance-details.module").then((m) => m.InsuranceDetailsModule),
  },
  {
    path: "services",
    loadChildren: () => import("../../components/services/services.module").then((m) => m.ServicesModule),
  },
  {
    path: "students",
    loadChildren: () => import("../../components/students/students.module").then((m) => m.StudentsModule),
  },
  {
    path: "exams",
    loadChildren: () => import("../../components/exams/exams.module").then((m) => m.ExamsModule),
  },
  {
    path: "sectional",
    loadChildren: () => import("../../components/sections/sections.module").then((m) => m.SectionsModule),
  },
  {
    path: "types",
    loadChildren: () => import("../../components/types/types.module").then((m) => m.TypesModule),
  },
  {
    path: "tests",
    loadChildren: () => import("../../components/tests/tests.module").then((m) => m.TestsModule),
  },
  {
    path: "questions",
    loadChildren: () => import("../../components/questions/questions.module").then((m) => m.QuestionsModule),
  },
  {
    path: "feeds",
    loadChildren: () => import("../../components/feeds/feeds.module").then((m) => m.FeedsModule),
  },
  {
    path: "advertisments",
    loadChildren: () => import("../../components/advertisments/advertisments.module").then((m) => m.AdvertismentsModule),
  },
  {
    path: "transactions",
    loadChildren: () => import("../../components/transactions/transactions.module").then((m) => m.TransactionsModule),
  },
  {
    path: "packages",
    loadChildren: () => import("../../components/packages/packages.module").then((m) => m.PackagesModule),
  },
  {
    path: "policies",
    loadChildren: () => import("../../components/policies/policies.module").then((m) => m.PoliciesModule),
  },
  {
    path: "widgets",
    loadChildren: () => import("../../components/widgets/widgets.module").then((m) => m.WidgetsModule),
  },
  {
    path: "ui-kits",
    loadChildren: () => import("../../components/ui-kits/ui-kits.module").then((m) => m.UiKitsModule),
  },
  {
    path: "base",
    loadChildren: () => import("../../components/bonus-ui/base/base.module").then((m) => m.BaseModule),
  },
  {
    path: "advance",
    loadChildren: () => import("../../components/bonus-ui/advance/advance.module").then((m) => m.AdvanceModule),
  },
  {
    path: "project",
    loadChildren: () => import("../../components/apps/project/project.module").then((m) => m.ProjectModule),
  },
  {
    path: "ecommerce",
    loadChildren: () => import("../../components/apps/e-commerce/e-commerce.module").then((m) => m.ECommerceModule),
  },
  {
    path: "email",
    loadChildren: () => import("../../components/apps/email/email.module").then((m) => m.EmailModule),
  },
  {
    path: "chat",
    loadChildren: () => import("../../components/apps/chat/chat.module").then((m) => m.ChatModule),
  },
  {
    path: "user",
    loadChildren: () => import("../../components/apps/users/users.module").then((m) => m.UsersModule),
  },
  {
    path: "bookmarks",
    loadChildren: () => import("../../components/apps/bookmarks/bookmarks.module").then((m) => m.BookmarksModule),
  },
  {
    path: "file-manager",
    loadChildren: () => import("../../components/apps/file-manager/file-manager.module").then((m) => m.FileManagerModule),
  },
  {
    path: "contacts",
    loadChildren: () => import("../../components/apps/contacts/contacts.module").then((m) => m.ContactsModule),
  },
  {
    path: "tasks",
    loadChildren: () => import("../../components/apps/tasks/tasks.module").then((m) => m.TasksModule),
  },
  {
    path: "calender",
    loadChildren: () => import("../../components/apps/calender/calender.module").then((m) => m.CalenderModule),
  },
  {
    path: "social-app",
    loadChildren: () => import("../../components/apps/social-app/social-app.module").then((m) => m.SocialAppModule),
  },
  {
    path: "to-do",
    loadChildren: () => import("../../components/apps/todo/todo.module").then((m) => m.TodoModule),
  },
  {
    path: "buttons",
    loadChildren: () => import("../../components/buttons/buttons.module").then((m) => m.ButtonsModule),
  },
  {
    path: "to-do-firebase",
    loadChildren: () => import("../../components/apps/to-do-firebase/to-do-firebase.module").then((m) => m.ToDoFirebaseModule),
  },
  {
    path: "editor",
    loadChildren: () => import("../../components/editors/editor.module").then((m) => m.EditorModule),
  },
  {
    path: "chart",
    loadChildren: () => import("../../components/charts/charts.module").then((m) => m.ChartModule),
  },
  {
    path: "icons",
    loadChildren: () => import("../../components/icons/icons.module").then((m) => m.IconsModule),
  },
  {
    path: "form",
    loadChildren: () => import("../../components/forms/forms.module").then((m) => m.FormModule),
  },
  {
    path: "table",
    loadChildren: () => import("../../components/table/table.module").then((m) => m.TableModule),
  },
  {
    path: "cards",
    loadChildren: () => import("../../components/cards/cards.module").then((m) => m.CardsModule),
  },
  {
    path: "sample-page",
    loadChildren: () => import("../../components/others/sample/sample.module").then((m) => m.SampleModule),
  },
  {
    path: "gallery",
    loadChildren: () => import("../../components/apps/gallery/gallery.module").then((m) => m.GalleryDemoModule),
  },
  {
    path: "blog",
    loadChildren: () => import("../../components/apps/blog/blog.module").then((m) => m.BlogModule),
  },
  {
    path: "faq",
    loadChildren: () => import("../../components/apps/faq/faq.module").then((m) => m.FaqModule),
  },
  {
    path: "job",
    loadChildren: () => import("../../components/apps/job-search/job-search.module").then((m) => m.JobSearchModule),
  },
  {
    path: "learning",
    loadChildren: () => import("../../components/apps/learning/learning.module").then((m) => m.LearningModule),
  },
  {
    path: "knowledgebase",
    loadChildren: () => import("../../components/apps/knowledge-base/knowledge-base.module").then((m) => m.KnowledgeBaseModule),
  },
  {
    path: "map",
    loadChildren: () => import("../../components/apps/map/map.module").then((m) => m.MapModule),
  },
  {
    path: "support-ticket",
    loadChildren: () => import("../../components/apps/support-ticket/support-ticket.module").then((m) => m.SupportTicketModule),
  },
  {
    path: "search-pages",
    loadChildren: () => import("../../components/others/search-result/search-result.module").then((m) => m.SearchResultModule),
  },
];
