import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'selectLibraryInfo.components': {
    id: 'course-authoring.library-authoring.pick-components.select-library.info.components',
    defaultMessage: 'Chọn một thư viện để duyệt các thành phần.',
    description: 'The info text for the select library component',
  },
  'selectLibraryInfo.units': {
    id: 'course-authoring.library-authoring.pick-components.select-library.info.units',
    defaultMessage: 'Chọn một thư viện để duyệt các đơn vị.',
    description: 'The info text for the select library for units',
  },
  'selectLibraryInfo.sections': {
    id: 'course-authoring.library-authoring.pick-components.select-library.info.sections',
    defaultMessage: 'Chọn một thư viện để duyệt các phần.',
    description: 'The info text for the select library for sections',
  },
  'selectLibraryInfo.subsections': {
    id: 'course-authoring.library-authoring.pick-components.select-library.info.subsections',
    defaultMessage: 'Chọn một thư viện để duyệt các mục con.',
    description: 'The info text for the select library for subsections',
  },
  'selectLibraryInfo.collections': {
    id: 'course-authoring.library-authoring.pick-components.select-library.info.collections',
    defaultMessage: 'Chọn một thư viện để duyệt các bộ sưu tập.',
    description: 'The info text for the select library for collections',
  },
  selectLibrarySearchPlaceholder: {
    id: 'course-authoring.library-authoring.pick-components.select-library.search-placeholder',
    defaultMessage: 'Tìm kiếm thư viện',
    description: 'The placeholder text for the search field in the select library component',
  },
  selectLibraryPaginationLabel: {
    id: 'course-authoring.library-authoring.pick-components.select-library.pagination-label',
    defaultMessage: 'Phân trang thư viện',
    description: 'The pagination label for the select library component',
  },
  selectLibraryNoSearchResultsTitle: {
    id: 'course-authoring.library-authoring.pick-components.select-library.no-search.results.title',
    defaultMessage: 'Chúng tôi không tìm thấy kết quả nào',
    description: 'The title for the no search results state in the select library component',
  },
  selectLibraryNoSearchResultsMessage: {
    id: 'course-authoring.library-authoring.pick-components.select-library.no-search.message',
    defaultMessage: 'Không có thư viện nào với các bộ lọc hiện tại.',
    description: 'The message for the no search results state in the select library component',
  },
  selectLibraryNoLibrariesTitle: {
    id: 'course-authoring.library-authoring.pick-components.select-library.no-libraries.title',
    defaultMessage: 'Không tìm thấy thư viện nào',
    description: 'The title for the no libraries state in the select library component',
  },
  selectLibraryNoLibrariesMessage: {
    id: 'course-authoring.library-authoring.pick-components.select-library.no-libraries.message',
    defaultMessage:
      'Bạn chưa tạo thư viện nào hoặc bạn không có quyền truy cập bất kỳ thư viện nào. '
      + 'Để tạo thư viện mới, hãy vào Trang chủ Studio hoặc liên hệ quản trị hệ thống.',
    description: 'The message for the no libraries state in the select library component',
  },
  selectLibraryNextButton: {
    id: 'course-authoring.library-authoring.pick-components.select-library.next-button',
    defaultMessage: 'Tiếp theo',
    description: 'The text for the next button in the select library component',
  },
  pickerInfoBanner: {
    id: 'course-authoring.library-authoring.pick-components.component-picker.information-alert',
    defaultMessage: 'Chỉ nội dung đã xuất bản mới được hiển thị và có thể tái sử dụng.',
    description: 'The alert text on top of component-picker if only published content is visible.',
  },
});

export default messages;
