<?php
/**
 * Body Prepend template
 *
 * Sit between the header and the footer
 *
 * PHP version 5
 *
 * Licensed under The MIT License
 * Redistributions of files must retain the above copyright notice.
 *
 * @author        Wan Qi Chen <kami@kamisama.me>
 * @copyright     Copyright 2012, Wan Qi Chen <kami@kamisama.me>
 * @link          http://resqueboard.kamisama.me
 * @package       resqueboard
 * @subpackage    resqueboard.template
 * @since         1.0.0
 * @license       MIT License (http://www.opensource.org/licenses/mit-license.php)
 */
?>
<div id="main">
    <ul class="menu">
        <?php
            $navs = array(
                        '/' => array(
                            'icon' => 'icon-home',
                            'title' => 'Home'
                            ),
                        '/workers' => array(
                            'icon' => 'icon-cogs',
                            'title' => 'Workers'),
                        '/logs' => array(
                            'icon' => 'icon-file',
                            'title' => 'Logs',
                            'submenu' => array(
                                '<i class="icon-eye-open"></i> Latest activities' => '/logs',
                                '<i class="icon-eye-open"></i> Browse archives' => '/logs/browse',
                            )
                        ),
                        '/jobs' => array(
                                'icon' => 'icon-briefcase',
                                'title' => 'Jobs',
                                'submenu' => array(
                                    '<i class="icon-dashboard"></i> Jobs Dashboard' => '/jobs',
                                    '<i class="icon-eye-open"></i> Jobs browser' => '/jobs/view',
                                    '<i class="icon-tasks"></i> Class distribution' => 'jobs/distribution/class',
                                    '<i class="icon-table"></i> Load distribution' => '/jobs/distribution/load',
                                    '<i class="icon-bar-chart"></i> Load overview' => '/jobs/overview/hour',
                                    '<i class="icon-bar-chart"></i> Scheduled Jobs' => '/jobs/scheduled'
                                )
                         )
                    );

            foreach ($navs as $link => $nav) {

                $class = array();

                if (isset($nav['submenu'])) {
                    foreach($nav['submenu'] as $title => $s_link) {
                        if (strpos($_SERVER['REQUEST_URI'], $s_link) !== false && $link != '/') {
                            $class['submenu'] = array($s_link => 'active');
                            break;
                        };
                    }
                } elseif (empty($class) || !isset($nav['submenu'])) {
                    if (((strpos($_SERVER['REQUEST_URI'], $link) !== false && $link != '/' || $_SERVER['REQUEST_URI'] == '/' && $link == '/'))) {
                        $class['root'] = array('active');
                    };
                }


                echo '<li class="dropdown">'.
                '<a href="';
                if (isset($nav['submenu'])) {
                    echo '#';
                } else {
                    echo $link;
                }
                echo '"';

                if (isset($nav['submenu'])) {
                    $class['root'][] = 'dropdown dropdown-toggle';
                }

                if (isset($class['root'])) {
                     echo ' class="'. implode(' ', $class['root']) .'"';
                }

                if (isset($nav['submenu'])) {
                    echo ' data-toggle="dropdown"';
                }

                echo '>';
                if (isset($nav['icon'])) {
                    echo '<i class="'.$nav['icon'].'"></i> ';
                }
                echo $nav['title'];
                echo '</a>';

                if (isset($nav['submenu'])) {
                    echo '<ul class="dropdown-menu" role="menu">';
                    foreach($nav['submenu'] as $title => $link) {
                        echo '<li><a href="'.$link.'"';
                        if (isset($class['submenu'][$link])) {
                            echo ' class="'. $class['submenu'][$link] .'"';
                        }
                        echo '>'.$title.'</a></li>';
                    }
                    echo '</ul>';
                }

                echo '</li>';
            }
        ?>
    </ul>
    <div id="body">