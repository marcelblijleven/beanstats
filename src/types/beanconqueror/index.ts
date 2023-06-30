export interface BCData {
    BEANS:       Bean[];
    BREWS:       Brew[];
    MILL:        Mill[];
    PREPARATION: Preparation[];
    SETTINGS:    Setting[];
    VERSION:     Version[];
}

export interface Bean {
    name:                   string;
    buyDate:                string;
    roastingDate:           string;
    note:                   string | null;
    roaster:                string;
    config:                 Config;
    roast:                  BeanRoastingType;
    roast_range:            number;
    roast_custom:           string;
    beanMix:                BeanMix;
    aromatics:              null | string;
    weight:                 number;
    finished:               boolean;
    cost:                   number;
    attachments:            string[];
    decaffeinated:          boolean;
    cupping_points:         number | string;
    bean_roasting_type:     BeanRoastingType;
    bean_information:       { [key: string]: null | string }[];
    url:                    string;
    ean_article_number:     null | string;
    bean_roast_information: BeanRoastInformation;
    rating:                 number;
    qr_code:                string;
    favourite:              boolean;
    shared?:                boolean;
    cupping?:               Cupping;
    cupped_flavor?:         CuppedFlavor;
}

export enum BeanMix {
    SingleOrigin = "SINGLE_ORIGIN",
    Unknown = "UNKNOWN",
    Blend = "BLEND",
}

export interface BeanRoastInformation {
    drop_temperature:         number;
    roast_length:             number;
    roaster_machine:          string;
    green_bean_weight:        number;
    outside_temperature:      number;
    humidity:                 number;
    bean_uuid:                string;
    first_crack_minute:       number;
    first_crack_temperature:  number;
    second_crack_minute:      number;
    second_crack_temperature: number;
}

export enum BeanRoastingType {
    Espresso = "ESPRESSO",
    Filter = "FILTER",
    Omni = "OMNI",
    Unknown = "UNKNOWN",

}

export interface Config {
    uuid:           string;
    unix_timestamp: number;
}

export interface CuppedFlavor {
    predefined_flavors: PredefinedFlavors;
    custom_flavors:     any[];
}

export interface PredefinedFlavors {
    [key: string]: any;
}

export interface Cupping {
    body:               number;
    brightness:         number;
    clean_cup:          number;
    complexity:         number;
    cuppers_correction: number;
    dry_fragrance:      number;
    finish:             number;
    flavor:             number;
    sweetness:          number;
    uniformity:         number;
    wet_aroma:          number;
    notes:              string;
}

export interface Brew {
    grind_size:                           string;
    grind_weight:                         number;
    method_of_preparation:                string;
    mill:                                 string;
    mill_speed:                           number;
    mill_timer:                           number;
    pressure_profile:                     string;
    bean:                                 string;
    brew_temperature_time:                number;
    brew_temperature:                     number;
    brew_time:                            number;
    brew_quantity:                        number;
    brew_quantity_type:                   BrewQuantityType;
    note:                                 string;
    rating:                               number;
    coffee_type:                          string;
    coffee_concentration:                 string;
    coffee_first_drip_time:               number;
    coffee_blooming_time:                 number;
    attachments:                          any[];
    config:                               Config;
    tds:                                  number;
    brew_beverage_quantity:               number;
    brew_beverage_quantity_type:          string;
    coordinates:                          Coordinates;
    cupping:                              Cupping;
    cupped_flavor:                        CuppedFlavor;
    method_of_preparation_tools:          any[];
    bean_weight_in:                       number;
    favourite:                            boolean;
    water:                                string;
    vessel_name:                          string;
    vessel_weight:                        number;
    flow_profile:                         string;
    brew_time_milliseconds?:              number;
    brew_temperature_time_milliseconds?:  number;
    coffee_first_drip_time_milliseconds?: number;
    coffee_blooming_time_milliseconds?:   number;
}

export enum BrewQuantityType {
    Gr = "GR",
}

export interface Coordinates {
    accuracy:         null;
    altitude:         null;
    altitudeAccuracy: null;
    heading:          null;
    latitude:         null;
    longitude:        null;
    speed:            null;
}

export interface Mill {
    name:        string;
    note:        string;
    config:      Config;
    finished:    boolean;
    attachments: any[];
}

export interface Preparation {
    name:                           string;
    note:                           string;
    config:                         Config;
    type:                           string;
    style_type:                     string;
    finished:                       boolean;
    use_custom_parameters:          boolean;
    manage_parameters:              { [key: string]: boolean };
    default_last_coffee_parameters: { [key: string]: boolean };
    visible_list_view_parameters:   { [key: string]: boolean };
    brew_order:                     BrewOrder;
    tools:                          any[];
    attachments:                    any[];
}

export interface BrewOrder {
    before: { [key: string]: number };
    while:  While;
    after:  After;
}

export interface After {
    coffee_type:            number;
    coffee_concentration:   number;
    brew_quantity:          number;
    brew_beverage_quantity: number;
    tds:                    number;
    rating:                 number;
    note:                   number;
    set_custom_brew_time:   number;
    attachments:            number;
}

export interface While {
    brew_temperature_time:  number;
    brew_time:              number;
    coffee_blooming_time:   number;
    coffee_first_drip_time: number;
}

export interface Setting {
    brew_view:                               string;
    startup_view:                            string;
    config:                                  Config;
    manage_parameters:                       { [key: string]: boolean };
    default_last_coffee_parameters:          { [key: string]: boolean };
    visible_list_view_parameters:            { [key: string]: boolean };
    brew_order:                              BrewOrder;
    language:                                string;
    matomo_analytics:                        boolean;
    qr_scanner_information:                  boolean;
    track_brew_coordinates:                  boolean;
    fast_brew_repeat:                        boolean;
    brew_milliseconds:                       boolean;
    show_archived_beans:                     boolean;
    show_archived_brews:                     boolean;
    show_archived_mills:                     boolean;
    show_archived_preparations:              boolean;
    show_archived_green_beans:               boolean;
    show_archived_waters:                    boolean;
    show_archived_brews_on_dashboard:        boolean;
    track_caffeine_consumption:              boolean;
    show_roasting_section:                   boolean;
    show_water_section:                      boolean;
    show_cupping_section:                    boolean;
    brew_filter:                             BrewFilter;
    bean_filter:                             BeanFilter;
    bean_sort:                               BeanSort;
    green_bean_sort:                         BeanSort;
    graph:                                   Graph;
    brew_rating:                             number;
    brew_rating_steps:                       number;
    bean_rating:                             number;
    bean_rating_steps:                       number;
    welcome_page_showed:                     boolean;
    wake_lock:                               boolean;
    image_quality:                           number;
    scale_id:                                string;
    scale_type:                              null;
    bluetooth_scale_stay_connected:          boolean;
    bluetooth_scale_tare_on_brew:            boolean;
    bluetooth_scale_tare_on_start_timer:     boolean;
    bluetooth_scale_stop_timer_on_brew:      boolean;
    bluetooth_scale_reset_timer_on_brew:     boolean;
    bluetooth_scale_maximize_on_start_timer: boolean;
    bluetooth_ignore_negative_values:        boolean;
    bluetooth_ignore_anomaly_values:         boolean;
    bluetooth_command_delay:                 number;
    scale_log:                               boolean;
    pressure_id:                             string;
    pressure_type:                           null;
    pressure_log:                            boolean;
    pressure_threshold_active:               boolean;
    pressure_threshold_bar:                  number;
    pressure_stay_connected:                 boolean;
    currency:                                string;
    brew_milliseconds_leading_digits:        number;
    brew_display_bean_image:                 boolean;
}

export interface BeanFilter {
    OPEN:     BeanFilterARCHIVED;
    ARCHIVED: BeanFilterARCHIVED;
}

export interface BeanFilterARCHIVED {
    favourite:          boolean;
    rating:             Rating;
    bean_roasting_type: any[];
    roastingDateStart:  string;
    roastingDateEnd:    string;
}

export interface Rating {
    upper: number;
    lower: number;
}

export interface BeanSort {
    OPEN:     BeanSortARCHIVED;
    ARCHIVED: BeanSortARCHIVED;
}

export interface BeanSortARCHIVED {
    sort_after: string;
    sort_order: string;
}

export interface BrewFilter {
    OPEN:     BrewFilterARCHIVED;
    ARCHIVED: BrewFilterARCHIVED;
}

export interface BrewFilterARCHIVED {
    mill:                        any[];
    bean:                        any[];
    method_of_preparation:       any[];
    method_of_preparation_tools: any[];
    favourite:                   boolean;
    rating:                      Rating;
}

export interface BrewGraphs {
    weight: boolean;
    calc_flow: boolean;
    realtime_flow: boolean;
    pressure: boolean;
    temperature: boolean;
}

export interface Graph {
    ESPRESSO: BrewGraphs;
    FILTER:   BrewGraphs;
}

export interface Version {
    alreadyDisplayedVersions: string[];
    updatedDataVersions:      string[];
    config:                   Config;
}

