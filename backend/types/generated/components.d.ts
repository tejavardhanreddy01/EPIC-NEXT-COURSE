import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsButtonCta extends Struct.ComponentSchema {
  collectionName: 'components_components_button_ctas';
  info: {
    displayName: 'ButtonCTA';
    icon: 'gate';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'outline', 'outline-icon']
    >;
  };
}

export interface ComponentsFooter extends Struct.ComponentSchema {
  collectionName: 'components_components_footers';
  info: {
    displayName: 'footer';
    icon: 'arrowDown';
  };
  attributes: {
    address: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
  };
}

export interface ComponentsHeader extends Struct.ComponentSchema {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'Header';
    icon: 'gate';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsNav extends Struct.ComponentSchema {
  collectionName: 'components_components_navs';
  info: {
    displayName: 'nav';
  };
  attributes: {
    link: Schema.Attribute.String;
    link2: Schema.Attribute.String;
  };
}

export interface ComponentsTitle extends Struct.ComponentSchema {
  collectionName: 'components_components_titles';
  info: {
    displayName: 'title';
    icon: 'gate';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'components.link', false>;
    Nav: Schema.Attribute.Component<'components.nav', false>;
    subHeading: Schema.Attribute.Text;
    textField: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.button-cta': ComponentsButtonCta;
      'components.footer': ComponentsFooter;
      'components.header': ComponentsHeader;
      'components.link': ComponentsLink;
      'components.nav': ComponentsNav;
      'components.title': ComponentsTitle;
      'layout.hero-section': LayoutHeroSection;
    }
  }
}
