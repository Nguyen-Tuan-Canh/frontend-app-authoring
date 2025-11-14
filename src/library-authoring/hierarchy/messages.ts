import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  willPublishChipText: {
    id: 'course-authoring.library-authoring.container-component.hierarchy.will-publish-chip.text',
    defaultMessage: 'Sẽ được xuất bản',
    description: 'Text shown when a component/unit/section/subsection will be published when confirmed.',
  },
  draftChipText: {
    id: 'course-authoring.library-authoring.container-component.hierarchy.draft-chip.text',
    defaultMessage: 'Bản nháp',
    description: 'Chip in component/container that is shown when has unpublished changes',
  },
  publishedChipText: {
    id: 'course-authoring.library-authoring.container-component.hierarchy.published-chip.text',
    defaultMessage: 'Đã xuất bản',
    description: 'Text shown when a unit/section/subsection/component is published.',
  },
  hierarchySections: {
    id: 'course-authoring.library-authoring.container-sidebar.hierarchy-sections',
    defaultMessage: '{count, plural, one {{displayName}} other {{count} phần}}',
    description: (
      'Text used for the section part of the hierarchy: show the displayName when there is one, or '
      + 'the count when there is more than one.'
    ),
  },
  hierarchySubsections: {
    id: 'course-authoring.library-authoring.container-sidebar.hierarchy-subsections',
    defaultMessage: '{count, plural, one {{displayName}} other {{count} tiểu phần}}',
    description: (
      'Text used for the subsection part of the hierarchy: show the displayName when there is one, or '
      + 'the count when there is more than one.'
    ),
  },
  hierarchyUnits: {
    id: 'course-authoring.library-authoring.container-sidebar.hierarchy-units',
    defaultMessage: '{count, plural, one {{displayName}} other {{count} đơn vị}}',
    description: (
      'Text used for the unit part of the hierarchy: show the displayName when there is one, or '
      + 'the count when there is more than one.'
    ),
  },
  hierarchyComponents: {
    id: 'course-authoring.library-authoring.container-sidebar.hierarchy-components',
    defaultMessage: '{count, plural, one {{displayName}} other {{count} thành phần}}',
    description: (
      'Text used for the components part of the hierarchy: show the displayName when there is one, or '
      + 'the count when there is more than one.'
    ),
  },
  publishSectionWithChildrenWarning: {
    id: 'course-authoring.library-authoring.section-sidebar.hierarchy-publisher.publish-warning',
    defaultMessage: (
      'Phần này và {childCount, plural, one {tiểu phần} other {các tiểu phần}}'
      + ' bên trong sẽ đều được <highlight>xuất bản</highlight>.'
    ),
    description: 'Content details shown before publishing a section that contains subsections',
  },
  publishSectionWarning: {
    id: 'course-authoring.library-authoring.section-sidebar.hierarchy-publisher.publish-empty-warning',
    defaultMessage: 'Phần này sẽ được <highlight>xuất bản</highlight>.',
    description: 'Content details shown before publishing an empty section',
  },
  publishSubsectionWithChildrenWarning: {
    id: 'course-authoring.library-authoring.subsection-sidebar.hierarchy-publisher.publish-warning',
    defaultMessage: (
      'Tiểu phần này và {childCount, plural, one {đơn vị} other {các đơn vị}}'
      + ' bên trong sẽ đều được <highlight>xuất bản</highlight>.'
    ),
    description: 'Content details shown before publishing a subsection that contains units',
  },
  publishSubsectionWarning: {
    id: 'course-authoring.library-authoring.subsection-sidebar.hierarchy-publisher.publish-empty-warning',
    defaultMessage: 'Tiểu phần này sẽ được <highlight>xuất bản</highlight>.',
    description: 'Content details shown before publishing an empty subsection',
  },
  publishUnitWithChildrenWarning: {
    id: 'course-authoring.library-authoring.unit-sidebar.hierarchy-publisher.publish-warning',
    defaultMessage: (
      'Đơn vị này và {childCount, plural, one {thành phần} other {các thành phần}}'
      + ' bên trong sẽ đều được <highlight>xuất bản</highlight>.'
    ),
    description: 'Content details shown before publishing a unit that contains components',
  },
  publishUnitWarning: {
    id: 'course-authoring.library-authoring.unit-sidebar.hierarchy-publisher.publish-empty-warning',
    defaultMessage: 'Đơn vị này sẽ được <highlight>xuất bản</highlight>.',
    description: 'Content details shown before publishing an empty unit',
  },
  publishSubsectionWithParentWarning: {
    id: 'course-authoring.library-authoring.subsection-sidebar.hierarchy-publisher.publish-parent-warning',
    defaultMessage: (
      '{parentCount, plural, one {Phần cha của tiểu phần này} other {Các phần cha của tiểu phần này}}'
      + ' sẽ ở trạng thái <highlight>bản nháp</highlight>.'
    ),
    description: 'Parent details shown before publishing a unit that has one or more parent subsections',
  },
  publishUnitWithParentWarning: {
    id: 'course-authoring.library-authoring.unit-sidebar.hierarchy-publisher.publish-parent-warning',
    defaultMessage: (
      '{parentCount, plural, one {Tiểu phần cha của đơn vị này} other {Các tiểu phần cha của đơn vị này}}'
      + ' sẽ ở trạng thái <highlight>bản nháp</highlight>.'
    ),
    description: 'Parent details shown before publishing a unit that has one or more parent subsections',
  },
  publishConfirmHeading: {
    id: 'course-authoring.library-authoring.item-sidebar.hierarchy-publisher.publish-confirm-heading',
    defaultMessage: 'Xác nhận xuất bản',
    description: 'Header text shown while confirming publish of a unit/subsection/section',
  },
  publishCancel: {
    id: 'course-authoring.library-authoring.item-sidebar.hierarchy-publisher.publish-cancel',
    defaultMessage: 'Hủy',
    description: 'Button text shown to cancel publish of a unit/subsection/section',
  },
  publishConfirm: {
    id: 'course-authoring.library-authoring.item-sidebar.hierarchy-publisher.publish-confirm-button',
    defaultMessage: 'Xuất bản',
    description: 'Button text shown to confirm publish of a unit/subsection/section',
  },
  empty: {
    id: 'course-authoring.library-authoring.item-sidebar.hierarchy-publisher.empty',
    defaultMessage: 'Không có phần con',
    description: 'Message when the item has no children',
  },
  publishComponentWarning: {
    id: 'course-authoring.library-authoring.component-sidebar.hierarchy-publisher.publish-empty-warning',
    defaultMessage: 'Thành phần này sẽ được <highlight>xuất bản</highlight>.',
    description: 'Content details shown before publishing an empty unit',
  },
  publishComponentsWithParentWarning: {
    id: 'course-authoring.library-authoring.component-sidebar.hierarchy-publisher.publish-parent-warning',
    defaultMessage: (
      '{parentCount, plural, one {Đơn vị cha của thành phần này} other {Các đơn vị cha của thành phần này}}'
      + ' sẽ ở trạng thái <highlight>bản nháp</highlight>.'
    ),
    description: 'Parent details shown before publishing a component that has one or more parent units',
  },
});

export default messages;
