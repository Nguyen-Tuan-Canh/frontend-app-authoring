import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  oldVersionTitle: {
    id: 'course-authoring.library-authoring.component-comparison.oldVersion',
    defaultMessage: 'Phiên bản cũ',
    description: 'Tiêu đề hiển thị cho phiên bản cũ khi so sánh thay đổi',
  },
  newVersionTitle: {
    id: 'course-authoring.library-authoring.component-comparison.newVersion',
    defaultMessage: 'Phiên bản mới',
    description: 'Tiêu đề hiển thị cho phiên bản mới khi so sánh thay đổi',
  },
  iframeTitlePrefix: {
    // This is only used in the "PreviewChangesEmbed" iframe for the legacy UI
    id: 'course-authoring.library-authoring.component-comparison.iframeTitlePrefix',
    defaultMessage: 'So sánh thay đổi',
    description: 'Tiêu đề dùng cho hộp thoại so sánh thay đổi',
  },
  courseContentTitle: {
    id: 'course-authoring.library-authoring.component-comparison.courseContent',
    defaultMessage: 'Nội dung khóa học',
    description: 'Tiêu đề hiển thị cho nội dung khóa học khi so sánh thay đổi',
  },
  publishedLibraryContentTitle: {
    id: 'course-authoring.library-authoring.component-comparison.publishedLibraryContent',
    defaultMessage: 'Nội dung thư viện đã xuất bản',
    description: 'Tiêu đề hiển thị cho nội dung thư viện đã xuất bản khi so sánh thay đổi',
  },
});

export default messages;
