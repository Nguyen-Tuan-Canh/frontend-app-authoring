import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title1: {
    id: 'course-authoring.import.sidebar.title1',
    defaultMessage: 'Vì sao cần nhập một khóa học?',
  },
  description1: {
    id: 'course-authoring.import.sidebar.description1',
    defaultMessage: 'Bạn có thể muốn chạy một phiên bản mới của một khóa học hiện có, hoặc thay thế hoàn toàn một khóa học hiện tại. Hoặc bạn có thể đã phát triển khóa học ở bên ngoài {studioShortName}.',
  },
  importedContent: {
    id: 'course-authoring.import.sidebar.importedContent',
    defaultMessage: 'Những nội dung nào sẽ được nhập?',
  },
  importedContentHeading: {
    id: 'course-authoring.import.sidebar.importedContentHeading',
    defaultMessage: 'Các nội dung sau sẽ được nhập:',
  },
  content1: {
    id: 'course-authoring.import.sidebar.content1',
    defaultMessage: 'Nội dung và cấu trúc khóa học',
  },
  content2: {
    id: 'course-authoring.import.sidebar.content2',
    defaultMessage: 'Các mốc thời gian của khóa học',
  },
  content3: {
    id: 'course-authoring.import.sidebar.content3',
    defaultMessage: 'Chính sách chấm điểm',
  },
  content4: {
    id: 'course-authoring.import.sidebar.content4',
    defaultMessage: 'Mọi cấu hình nhóm',
  },
  content5: {
    id: 'course-authoring.import.sidebar.content5',
    defaultMessage: 'Các thiết lập trong trang cài đặt nâng cao, bao gồm khóa API MATLAB và LTI passports',
  },
  notImportedContent: {
    id: 'course-authoring.import.sidebar.notImportedContent',
    defaultMessage: 'Các nội dung sau sẽ không được xuất:',
  },
  content6: {
    id: 'course-authoring.import.sidebar.content6',
    defaultMessage: 'Nội dung riêng của người học, như điểm số và dữ liệu diễn đàn thảo luận',
  },
  content7: {
    id: 'course-authoring.import.sidebar.content7',
    defaultMessage: 'Nhóm phụ trách khóa học',
  },
  warningTitle: {
    id: 'course-authoring.import.sidebar.warningTitle',
    defaultMessage: 'Cảnh báo: nhập khóa học khi khóa đang chạy',
  },
  warningDescription: {
    id: 'course-authoring.import.sidebar.warningDescription',
    defaultMessage: 'Nếu bạn thực hiện thao tác nhập trong khi khóa học đang chạy và thay đổi tên URL (hoặc các nút url_name) của bất kỳ thành phần bài tập nào, dữ liệu của người học gắn với các thành phần đó có thể bị mất. Dữ liệu này bao gồm cả điểm bài tập của người học.',
  },
  learnMoreButtonTitle: {
    id: 'course-authoring.import.sidebar.learnMoreButtonTitle',
    defaultMessage: 'Tìm hiểu thêm về việc nhập khóa học',
  },
});

export default messages;
