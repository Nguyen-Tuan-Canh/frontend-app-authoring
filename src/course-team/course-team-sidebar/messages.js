import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  sidebarTitle: {
    id: 'course-authoring.course-team.sidebar.title',
    defaultMessage: 'Vai trò trong đội ngũ khóa học',
  },
  sidebarAbout_1: {
    id: 'course-authoring.course-team.sidebar.about-1',
    defaultMessage: 'Thành viên đội ngũ khóa học với vai trò Nhân sự (Staff) là đồng tác giả của khóa học. Họ có toàn quyền soạn thảo và chỉnh sửa mọi nội dung khóa học.',
  },
  sidebarAbout_2: {
    id: 'course-authoring.course-team.sidebar.about-2',
    defaultMessage: 'Quản trị viên (Admin) là các thành viên có thể thêm hoặc xóa những thành viên khác khỏi đội ngũ khóa học.',
  },
  sidebarAbout_3: {
    id: 'course-authoring.course-team.sidebar.about-3',
    defaultMessage: 'Tất cả thành viên đội ngũ khóa học đều có thể truy cập nội dung trong Studio, LMS và Insights nhưng không tự động được ghi danh vào khóa học.',
  },
  ownershipTitle: {
    id: 'course-authoring.course-team.sidebar.ownership.title',
    defaultMessage: 'Chuyển quyền sở hữu',
  },
  ownershipDescription: {
    id: 'course-authoring.course-team.sidebar.ownership.description',
    defaultMessage: 'Mỗi khóa học phải có ít nhất một Quản trị viên. Nếu bạn hiện là Quản trị viên và muốn chuyển quyền sở hữu khóa học, hãy nhấp {strong} để đặt một người dùng khác làm Quản trị viên, sau đó nhờ người đó xóa bạn khỏi danh sách Đội ngũ khóa học.',
  },
  helpInfoSidebarTitle: {
    id: 'course-authoring.course-team.sidebar.helpInfoSidebarTitle',
    defaultMessage: 'Cần hỗ trợ cho nhiều khóa học?',
  },
  helpInfoDescription: {
    id: 'course-authoring.course-team.sidebar.helpInfoDescription',
    defaultMessage: 'Hãy gửi email đến {email_address} để thêm, xóa hoặc cập nhật quyền truy cập người dùng hàng loạt.',
  },
  addAdminAccess: {
    id: 'course-authoring.course-team.sidebar.ownership.addAdminAccess',
    defaultMessage: 'Thêm quyền quản trị',
  },
});

export default messages;
