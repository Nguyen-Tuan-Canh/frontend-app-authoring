import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  pageTitle: {
    id: 'course-authoring.export.page.title',
    defaultMessage: '{headingTitle} | {courseName} | {siteName}',
  },
  headingTitle: {
    id: 'course-authoring.course-checklist.heading.title',
    defaultMessage: 'Danh sách kiểm tra',
    description: 'Tiêu đề chính cho trang Danh sách kiểm tra',
  },
  headingSubtitle: {
    id: 'course-authoring.course-checklist.heading.subtitle',
    defaultMessage: 'Công cụ',
  },
  launchChecklistLabel: {
    id: 'launchChecklistLabel',
    defaultMessage: 'Danh sách kiểm tra trước khi mở khóa học',
    description: 'Tiêu đề cho danh sách kiểm tra các việc cần hoàn thành trước khi mở khóa học',
  },
  bestPracticesChecklistLabel: {
    id: 'bestPracticesChecklistLabel',
    defaultMessage: 'Danh sách kiểm tra thực hành tốt nhất',
    description: 'Tiêu đề cho danh sách kiểm tra các thực hành tốt nhất cho khóa học',
  },
  launchChecklistLoadingLabel: {
    id: 'doneLoadingChecklistStatusLabel',
    defaultMessage: 'Đang tải dữ liệu Danh sách kiểm tra trước khi mở khóa học',
    description: 'Nhãn thông báo cho người dùng biết dữ liệu Danh sách kiểm tra trước khi mở khóa học đang được tải',
  },
  launchChecklistDoneLoadingLabel: {
    id: 'launchChecklistDoneLoadingLabel',
    defaultMessage: 'Dữ liệu Danh sách kiểm tra trước khi mở khóa học đã được tải xong',
    description: 'Nhãn thông báo cho người dùng biết dữ liệu Danh sách kiểm tra trước khi mở khóa học đã tải xong',
  },
  bestPracticesChecklistLoadingLabel: {
    id: 'bestPracticesChecklistLoadingLabel',
    defaultMessage: 'Đang tải dữ liệu Danh sách kiểm tra thực hành tốt nhất',
    description: 'Nhãn thông báo cho người dùng biết dữ liệu Danh sách kiểm tra thực hành tốt nhất đang được tải',
  },
  bestPracticesChecklistDoneLoadingLabel: {
    id: 'bestPracticesChecklistDoneLoadingLabel',
    defaultMessage: 'Dữ liệu Danh sách kiểm tra thực hành tốt nhất đã được tải xong',
    description: 'Nhãn thông báo cho người dùng biết dữ liệu Danh sách kiểm tra thực hành tốt nhất đã tải xong',
  },
});

export default messages;
