import React, { useState } from 'react';
import './tols.css'

const Tools = () => {
    const [selectedTab, setSelectedTab] = useState('Default');
    const [previousTab, setPreviousTab] = useState(null);

    const renderContent = () => {
        switch (selectedTab) {
            case 'Frontend':
                return <div>
                    <ul className='flex flex-wrap gap-2'>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Promotheus</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Loki</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Bitbucket</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Gitlab</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Kotline</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Android</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Java</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>Azure</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>GCP</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>DigitalOcean</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>AWS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>Kubernets</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>ELK</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Grafana</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Terraform</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>IOS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>swift</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Flutter</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] frontend'>Next JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] frontend'>React JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] frontend'>JavaScript</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX opacity-40'>Balsamic</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX opacity-40'>Invision</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX opacity-40'>Figma</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] devops opacity-40'>Docker</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] backent opacity-40'>PostgreSQL</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] backent opacity-40'>Python</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] backent opacity-40'>NodeJS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] backent opacity-40'>PHP</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] backent opacity-40'>GO</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] frontend'>ANT Design</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] frontend'>Gatsby JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] frontend'>VUE JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX opacity-40'>Principle</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX opacity-40'>Sketch</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX opacity-40'>Adobe suite</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] testing opacity-40'>YouTrack</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] testing opacity-40'>Appium</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] testing opacity-40'>Cypers</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] testing opacity-40'>Jmeter</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] backent opacity-40'>MongoDB</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] backent opacity-40'>Cassandra</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] frontend'>Sass</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] frontend'>Material Ui</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX opacity-40'>Zepline</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX opacity-40'>ILIsturator</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX opacity-40'>Lottie</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX opacity-50'>Photoshop</li>
                    </ul>
                </div>;
            case 'Backend':
                return <div>
                    <ul className='flex flex-wrap gap-2'>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Promotheus</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Loki</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Bitbucket</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Gitlab</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Kotline</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Android</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Java</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>Azure</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>GCP</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>DigitalOcean</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>AWS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>Kubernets</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>ELK</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Grafana</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Terraform</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>IOS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>swift</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Flutter</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>Next JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>React JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>JavaScript</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX opacity-40'>Balsamic</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX opacity-40'>Invision</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX opacity-40'>Figma</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] devops opacity-40'>Docker</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] backent'>PostgreSQL</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] backent'>Python</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] backent'>NodeJS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] backent'>PHP</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] backent'>GO</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>ANT Design</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>Gatsby JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>VUE JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX opacity-40'>Principle</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX opacity-40'>Sketch</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX opacity-40'>Adobe suite</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] testing opacity-40'>YouTrack</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] testing opacity-40'>Appium</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] testing opacity-40'>Cypers</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] testing opacity-40'>Jmeter</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] backent'>MongoDB</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] backent'>Cassandra</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>Sass</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>Material Ui</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX opacity-40'>Zepline</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX opacity-40'>ILIsturator</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX opacity-40'>Lottie</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX opacity-50'>Photoshop</li>
                    </ul>
                </div>;
            case 'DevOps':
                return <div>
                    <ul className='flex flex-wrap gap-2'>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] devops'>Promotheus</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] devops'>Loki</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] devops'>Bitbucket</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] devops'>Gitlab</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Kotline</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Android</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Java</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>Azure</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>GCP</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>DigitalOcean</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>AWS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>Kubernets</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] devops'>ELK</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] devops'>Grafana</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] devops'>Terraform</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>IOS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>swift</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Flutter</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>Next JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>React JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>JavaScript</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Balsamic</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Invision</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Figma</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] devops'>Docker</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>PostgreSQL</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>Python</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>NodeJS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>PHP</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>GO</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>ANT Design</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>Gatsby JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>VUE JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Principle</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Sketch</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Adobe suite</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 testing'>YouTrack</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 testing'>Appium</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 testing'>Cypers</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 testing'>Jmeter</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>MongoDB</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>Cassandra</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>Sass</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>Material Ui</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Zepline</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>ILIsturator</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Lottie</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Photoshop</li>
                    </ul>
                </div>;
            case 'Testing':
                return <div>
                    <ul className='flex flex-wrap gap-2'>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Promotheus</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Loki</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Bitbucket</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Gitlab</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Kotline</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Android</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Java</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>Azure</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>GCP</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>DigitalOcean</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>AWS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>Kubernets</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>ELK</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Grafana</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Terraform</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>IOS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>swift</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Flutter</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>Next JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>React JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>JavaScript</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Balsamic</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Invision</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Figma</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Docker</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>PostgreSQL</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>Python</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>NodeJS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>PHP</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>GO</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>ANT Design</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>Gatsby JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>VUE JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Principle</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Sketch</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Adobe suite</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] testing'>YouTrack</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] testing'>Appium</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] testing'>Cypers</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] testing'>Jmeter</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40  backent'>MongoDB</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40  backent'>Cassandra</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40  frontend'>Sass</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40  frontend'>Material Ui</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40  UX'>Zepline</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40  UX'>ILIsturator</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40  UX'>Lottie</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40  UX'>Photoshop</li>
                    </ul>
                </div>;
            case 'UX/UI':
                return <div>
                    <ul className='flex flex-wrap gap-2'>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Promotheus</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Loki</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Bitbucket</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Gitlab</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Kotline</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Android</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Java</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>Azure</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>GCP</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>DigitalOcean</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>AWS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>Kubernets</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>ELK</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Grafana</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Terraform</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>IOS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>swift</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Flutter</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>Next JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>React JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>JavaScript</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX'>Balsamic</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX'>Invision</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX'>Figma</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Docker</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>PostgreSQL</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>Python</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>NodeJS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>PHP</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>GO</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>ANT Design</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>Gatsby JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>VUE JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX'>Principle</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX'>Sketch</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX'>Adobe suite</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 testing'>YouTrack</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 testing'>Appium</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 testing'>Cypers</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 testing'>Jmeter</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>MongoDB</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>Cassandra</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>Sass</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>Material Ui</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX'>Zepline</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX'>ILIsturator</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX'>Lottie</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX'>Photoshop</li>
                    </ul>
                </div>;
            case 'Infrastructure':
                return <div>
                    <ul className='flex flex-wrap gap-2'>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Promotheus</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Loki</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Bitbucket</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Gitlab</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Kotline</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Android</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Java</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] Infrastructure'>Azure</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] Infrastructure'>GCP</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] Infrastructure'>DigitalOcean</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] Infrastructure'>AWS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] Infrastructure'>Kubernets</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>ELK</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Grafana</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Terraform</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>IOS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>swift</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 mobile'>Flutter</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>Next JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>React JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>JavaScript</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Balsamic</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Invision</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Figma</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Docker</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>PostgreSQL</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>Python</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>NodeJS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>PHP</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>GO</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>ANT Design</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>Gatsby JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>VUE JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Principle</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Sketch</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Adobe suite</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 testing'>YouTrack</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 testing'>Appium</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 testing'>Cypers</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 testing'>Jmeter</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>MongoDB</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>Cassandra</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>Sass</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>Material Ui</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Zepline</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>ILIsturator</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Lottie</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Photoshop</li>
                    </ul>
                </div>;
            case 'Mobile':
                return <div>
                    <ul className='flex flex-wrap gap-2'>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Promotheus</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Loki</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Bitbucket</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Gitlab</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px]  mobile'>Kotline</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px]  mobile'>Android</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px]  mobile'>Java</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>Azure</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>GCP</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>DigitalOcean</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>AWS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 Infrastructure'>Kubernets</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>ELK</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Grafana</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Terraform</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] mobile'>IOS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] mobile'>swift</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] mobile'>Flutter</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>Next JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>React JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>JavaScript</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Balsamic</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Invision</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Figma</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 devops'>Docker</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>PostgreSQL</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>Python</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>NodeJS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>PHP</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>GO</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>ANT Design</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>Gatsby JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>VUE JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Principle</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Sketch</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Adobe suite</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 testing'>YouTrack</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 testing'>Appium</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 testing'>Cypers</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 testing'>Jmeter</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>MongoDB</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 backent'>Cassandra</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>Sass</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 frontend'>Material Ui</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Zepline</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>ILIsturator</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Lottie</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] opacity-40 UX'>Photoshop</li>
                    </ul>
                </div>;
            case 'Default':
            default:
                return <div>
                    <ul className='flex flex-wrap gap-2'>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] devops'>Promotheus</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] devops'>Loki</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] devops'>Bitbucket</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] devops'>Gitlab</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] mobile'>Kotline</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] mobile'>Android</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] mobile'>Java</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] Infrastructure'>Azure</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] Infrastructure'>GCP</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] Infrastructure'>DigitalOcean</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] Infrastructure'>AWS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] Infrastructure'>Kubernets</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] devops'>ELK</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] devops'>Grafana</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] devops'>Terraform</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] mobile'>IOS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] mobile'>swift</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] mobile'>Flutter</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] frontend'>Next JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] frontend'>React JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] frontend'>JavaScript</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX'>Balsamic</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX'>Invision</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX'>Figma</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] devops'>Docker</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] backent'>PostgreSQL</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] backent'>Python</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] backent'>NodeJS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] backent'>PHP</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] backent'>GO</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] frontend'>ANT Design</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] frontend'>Gatsby JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] frontend'>VUE JS</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX'>Principle</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX'>Sketch</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX'>Adobe suite</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] testing'>YouTrack</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] testing'>Appium</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] testing'>Cypers</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] testing'>Jmeter</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] backent'>MongoDB</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] backent'>Cassandra</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] frontend'>Sass</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] frontend'>Material Ui</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX'>Zepline</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX'>ILIsturator</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX'>Lottie</li>
                        <li className='w-[95px] h-[90px] flex items-center justify-center border rounded-[8px] UX'>Photoshop</li>
                    </ul>
                </div>;
        }
    };

    const handleTabClick = (tab) => {
        if (selectedTab === tab) {
            setSelectedTab('Default');
        } else {
            setPreviousTab(selectedTab);
            setSelectedTab(tab);
        }
    };

    return (
        <div className='w-[100%] h-[800px] border bg-[#f5f5ff]'>
            <div className='w-[85%] h-[100%] mx-auto'>
                <h2 className='text-[80px] font-semibold text-blue-700'>Tools</h2>
                <ul className='flex gap-4'>
                    {['Frontend', 'Backend', 'DevOps', 'Testing', 'UX/UI', 'Infrastructure', 'Mobile'].map(tab => (
                        <li
                            key={tab}
                            className={`flex items-center gap-[5px] font-semibold cursor-pointer ${selectedTab === tab ? 'text-blue-700' : 'text-black'}`}
                            onClick={() => handleTabClick(tab)}
                        >
                            <input
                                className='cursor-pointer w-[15px] h-[15px]'
                                type="radio"
                                checked={selectedTab === tab}
                                readOnly
                            />
                            {tab}
                            
                        </li>
                    ))}
                </ul>
                <div className='mt-4'>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default Tools;
