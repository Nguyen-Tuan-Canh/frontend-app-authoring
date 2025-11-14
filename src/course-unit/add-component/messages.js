import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.course-unit.add.component.title',
    defaultMessage: 'Thêm thành phần mới',
    description: 'Title text for add component section in course unit.',
  },
  buttonText: {
    id: 'course-authoring.course-unit.add.component.button.text',
    defaultMessage: 'Thêm thành phần:',
    description: 'Information text for screen-readers about each add component button',
  },
  modalBtnText: {
    id: 'course-authoring.course-unit.modal.button.text',
    defaultMessage: 'Chọn',
    description: 'Information text for screen-readers about each add component button',
  },
  singleComponentPickerModalTitle: {
    id: 'course-authoring.course-unit.modal.single-title.text',
    defaultMessage: 'Chọn thành phần',
    description: 'Library content picker modal title.',
  },
  multipleComponentPickerModalTitle: {
    id: 'course-authoring.course-unit.modal.multiple-title.text',
    defaultMessage: 'Chọn nhiều thành phần',
    description: 'Problem bank component picker modal title.',
  },
  multipleComponentPickerModalBtn: {
    id: 'course-authoring.course-unit.modal.multiple-btn.text',
    defaultMessage: 'Thêm các thành phần đã chọn',
    description: 'Problem bank component add button text.',
  },
  videoPickerModalTitle: {
    id: 'course-authoring.course-unit.modal.video-title.text',
    defaultMessage: 'Chọn video',
    description: 'Video picker modal title.',
  },
  modalContainerTitle: {
    id: 'course-authoring.course-unit.modal.container.title',
    defaultMessage: 'Thêm thành phần {componentTitle}',
    description: 'Modal title for adding components',
  },
  modalContainerCancelBtnText: {
    id: 'course-authoring.course-unit.modal.container.cancel.button.text',
    defaultMessage: 'Hủy',
    description: 'Modal cancel button text.',
  },
  modalComponentSupportLabelFullySupported: {
    id: 'course-authoring.course-unit.modal.component.support.label.fully-supported',
    defaultMessage: 'Được hỗ trợ đầy đủ',
    description: 'Label for advance problem type\'s support status with full platform support',
  },
  modalComponentSupportLabelProvisionallySupported: {
    id: 'course-authoring.course-unit.modal.component.support.label.provisionally-support',
    defaultMessage: 'Được hỗ trợ tạm thời',
    description: 'Label for advance problem type\'s support status with provisional platform support',
  },
  modalComponentSupportLabelNotSupported: {
    id: 'course-authoring.course-unit.modal.component.support.label.not-supported',
    defaultMessage: 'Không được hỗ trợ',
    description: 'Label for advance problem type\'s support status with no platform support',
  },
  modalComponentSupportTooltipFullySupported: {
    id: 'course-authoring.course-unit.modal.component.support.tooltip.fully-supported',
    defaultMessage: 'Các công cụ và tính năng được hỗ trợ đầy đủ có sẵn cho các cài đặt Open edX, '
      + 'được kiểm thử đầy đủ, có giao diện người dùng (nếu áp dụng), và được ghi tài liệu trong '
      + 'các hướng dẫn Open edX chính thức trên docs.openedx.org.',
    description: 'Message for support status tooltip for modules with full platform support',
  },
  modalComponentSupportTooltipNotSupported: {
    id: 'course-authoring.course-unit.modal.component.support.tooltip.not-supported',
    defaultMessage: 'Các công cụ không được hỗ trợ không do cộng đồng Open edX duy trì, '
      + 'và có thể bị loại bỏ trong tương lai. Không khuyến nghị sử dụng trong khóa học '
      + 'do không đáp ứng một hoặc nhiều yêu cầu cơ bản như kiểm thử, khả năng truy cập, '
      + 'đa ngôn ngữ và tài liệu.',
    description: 'Message for support status tooltip for modules which is not supported',
  },
  modalComponentSupportTooltipProvisionallySupported: {
    id: 'course-authoring.course-unit.modal.component.support.tooltip.provisionally-support',
    defaultMessage: 'Các công cụ được hỗ trợ tạm thời có thể chưa đủ ổn định hoặc đầy đủ tính năng '
      + 'như khóa học của bạn yêu cầu. Open edX không kiểm soát chất lượng phần mềm này, '
      + 'cũng như nội dung được tạo ra bằng các công cụ đó. Hãy kiểm thử thật kỹ trước khi '
      + 'dùng trong khóa học, đặc biệt ở các phần được chấm điểm. Tài liệu hướng dẫn cho các '
      + 'công cụ được hỗ trợ tạm thời có thể chưa đầy đủ, hoặc được cung cấp từ các nguồn '
      + 'ngoài cộng đồng Open edX.',
    description: 'Message for support status tooltip for modules with provisional platform support',
  },
});

export default messages;
