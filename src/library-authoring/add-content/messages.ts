import { defineMessages } from '@edx/frontend-platform/i18n';

export const messages = defineMessages({
  collectionButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.collection',
    defaultMessage: 'Bộ sưu tập',
    description: 'Nội dung của nút tạo Bộ sưu tập.',
  },
  unitButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.unit',
    defaultMessage: 'Đơn vị',
    description: 'Nội dung của nút tạo Đơn vị.',
  },
  sectionButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.section',
    defaultMessage: 'Phần',
    description: 'Nội dung của nút tạo Phần.',
  },
  subsectionButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.subsection',
    defaultMessage: 'Mục con',
    description: 'Nội dung của nút tạo Mục con.',
  },
  libraryContentButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.library-content',
    defaultMessage: 'Nội dung thư viện có sẵn',
    description: 'Nội dung của nút thêm nội dung thư viện có sẵn vào bộ sưu tập hoặc container.',
  },
  addToButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.library-content.add-to-collection',
    defaultMessage: 'Thêm vào Bộ sưu tập',
    description: 'Nút để thêm nội dung thư viện vào bộ sưu tập.',
  },
  selectContentTitle: {
    id: 'course-authoring.library-authoring.add-content.select-components',
    defaultMessage: 'Chọn thành phần',
    description: 'Tiêu đề cho bộ chọn nội dung khi chọn thành phần trong thư viện.',
  },
  selectedContent: {
    id: 'course-authoring.library-authoring.add-content.selected-components',
    defaultMessage: '{count, plural, one {# thành phần đã chọn} other {# thành phần đã chọn}}',
    description: 'Tiêu đề cho phần thành phần đã chọn trong thư viện.',
  },
  textTypeButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.types.text',
    defaultMessage: 'Văn bản',
    description: 'Nội dung của nút tạo thành phần Văn bản.',
  },
  problemTypeButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.types.problem',
    defaultMessage: 'Bài tập',
    description: 'Nội dung của nút tạo thành phần Bài tập.',
  },
  openResponseTypeButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.types.open-response',
    defaultMessage: 'Câu trả lời mở',
    description: 'Nội dung của nút tạo thành phần Câu trả lời mở.',
  },
  dragDropTypeButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.types.drag-drop',
    defaultMessage: 'Kéo thả',
    description: 'Nội dung của nút tạo thành phần Kéo thả.',
  },
  videoTypeButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.types.video',
    defaultMessage: 'Video',
    description: 'Nội dung của nút tạo thành phần Video.',
  },
  otherTypeButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.types.other',
    defaultMessage: 'Nâng cao / Khác',
    description: 'Nội dung của nút tạo thành phần Nâng cao / Khác.',
  },
  pasteButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.paste',
    defaultMessage: 'Dán từ bộ nhớ tạm',
    description: 'Nội dung của nút dán từ bộ nhớ tạm.',
  },
  successCreateMessage: {
    id: 'course-authoring.library-authoring.add-content.success.text',
    defaultMessage: 'Tạo nội dung thành công.',
    description: 'Thông báo khi tạo nội dung trong thư viện thành công.',
  },
  errorCreateMessage: {
    id: 'course-authoring.library-authoring.add-content.error.text',
    defaultMessage: 'Đã xảy ra lỗi khi tạo nội dung.',
    description: 'Thông báo khi việc tạo nội dung trong thư viện bị lỗi.',
  },
  errorCreateMessageWithDetail: {
    id: 'course-authoring.library-authoring.add-content.error.text-detail',
    defaultMessage: 'Đã xảy ra lỗi khi tạo nội dung: {detail}',
    description: (
      'Thông báo khi việc tạo nội dung trong thư viện bị lỗi.'
      + ' {detail} cung cấp thêm thông tin về lỗi.'
    ),
  },
  successAssociateComponentToContainerMessage: {
    id: 'course-authoring.library-authoring.associate-container-content.success.text',
    defaultMessage: 'Liên kết nội dung thành công.',
    description: 'Thông báo khi liên kết nội dung với container trong thư viện thành công.',
  },
  errorAssociateComponentToContainerMessage: {
    id: 'course-authoring.library-authoring.associate-container-content.error.text',
    defaultMessage: 'Đã xảy ra lỗi khi liên kết nội dung với container này.',
    description: 'Thông báo khi việc liên kết nội dung với container trong thư viện bị lỗi.',
  },
  addContentTitle: {
    id: 'course-authoring.library-authoring.sidebar.title.add-content',
    defaultMessage: 'Thêm nội dung',
    description: 'Tiêu đề phần thêm nội dung trong container của thư viện.',
  },
  successPasteClipboardMessage: {
    id: 'course-authoring.library-authoring.paste-clipboard.success.text',
    defaultMessage: 'Dán nội dung thành công.',
    description: 'Thông báo khi dán nội dung từ bộ nhớ tạm trong thư viện thành công.',
  },
  errorPasteClipboardMessage: {
    id: 'course-authoring.library-authoring.paste-clipboard.error.text',
    defaultMessage: 'Đã xảy ra lỗi khi dán nội dung.',
    description: 'Thông báo khi dán nội dung từ bộ nhớ tạm trong thư viện bị lỗi.',
  },
  errorPasteClipboardMessageWithDetail: {
    id: 'course-authoring.library-authoring.paste-clipboard.error.text-detail',
    defaultMessage: 'Đã xảy ra lỗi khi dán nội dung: {detail}',
    description: (
      'Thông báo khi dán nội dung từ bộ nhớ tạm trong thư viện bị lỗi.'
      + ' {detail} cung cấp thêm thông tin về lỗi.'
    ),
  },
  pastingClipboardMessage: {
    id: 'course-authoring.library-authoring.paste-clipboard.loading.text',
    defaultMessage: 'Đang dán nội dung từ bộ nhớ tạm...',
    description: 'Thông báo khi đang trong quá trình dán nội dung trong thư viện.',
  },
  unsupportedBlockPasteClipboardMessage: {
    id: 'course-authoring.library-authoring.paste-clipboard.unsupportedblock-error.text',
    defaultMessage: 'Thư viện hiện chưa hỗ trợ loại nội dung này.',
    description: 'Thông báo khi dán một khối nội dung không được hỗ trợ trong thư viện.',
  },
  backToAddContentListButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.back',
    defaultMessage: 'Quay lại danh sách',
    description: 'Nội dung nút trong giao diện tạo nâng cao để quay lại giao diện tạo chính.',
  },
});

export const unitMessages = defineMessages({
  addToButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.library-content.add-to-unit',
    defaultMessage: 'Thêm vào Đơn vị',
    description: 'Nút để thêm nội dung thư viện vào một Đơn vị.',
  },
});

export const subsectionMessages = defineMessages({
  unitButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.new-unit',
    defaultMessage: 'Đơn vị mới',
    description: 'Nội dung của nút tạo Đơn vị mới trong một Mục con.',
  },
  libraryContentButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.library-unit',
    defaultMessage: 'Đơn vị hiện có',
    description: 'Nội dung của nút thêm Đơn vị hiện có vào một Mục con.',
  },
  addToButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.library-content.add-to-subsection',
    defaultMessage: 'Thêm vào Mục con',
    description: 'Nút để thêm Đơn vị vào một Mục con.',
  },
  selectContentTitle: {
    id: 'course-authoring.library-authoring.add-content.select-units',
    defaultMessage: 'Chọn đơn vị',
    description: 'Tiêu đề cho bộ chọn nội dung khi chọn Đơn vị trong thư viện.',
  },
  selectedContent: {
    id: 'course-authoring.library-authoring.add-content.selected-units',
    defaultMessage: '{count, plural, one {# đơn vị đã chọn} other {# đơn vị đã chọn}}',
    description: 'Tiêu đề cho phần các Đơn vị đã chọn trong thư viện.',
  },
});

export const sectionMessages = defineMessages({
  subsectionButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.new-subsection',
    defaultMessage: 'Mục con mới',
    description: 'Nội dung của nút tạo Mục con mới trong một Phần.',
  },
  libraryContentButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.library-subsection',
    defaultMessage: 'Mục con hiện có',
    description: 'Nội dung của nút thêm Mục con hiện có vào một Phần.',
  },
  addToButton: {
    id: 'course-authoring.library-authoring.add-content.buttons.library-content.add-to-section',
    defaultMessage: 'Thêm vào Phần',
    description: 'Nút để thêm nội dung thư viện vào một Phần.',
  },
  selectContentTitle: {
    id: 'course-authoring.library-authoring.add-content.select-subsections',
    defaultMessage: 'Chọn các mục con',
    description: 'Tiêu đề cho bộ chọn nội dung khi chọn các Mục con trong thư viện.',
  },
  selectedContent: {
    id: 'course-authoring.library-authoring.add-content.selected-subsections',
    defaultMessage: '{count, plural, one {# mục con đã chọn} other {# mục con đã chọn}}',
    description: 'Tiêu đề cho phần các Mục con đã chọn trong thư viện.',
  },
});

/*
 * Returns the appropriate message set for the given route conditions.
 */
export const getContentMessages = (
  insideSection: boolean,
  insideSubsection: boolean,
  insideUnit: boolean,
) => {
  if (insideSection) {
    return {
      ...messages,
      ...sectionMessages,
    };
  }
  if (insideSubsection) {
    return {
      ...messages,
      ...subsectionMessages,
    };
  }
  if (insideUnit) {
    return {
      ...messages,
      ...unitMessages,
    };
  }
  return messages;
};

export default messages;
