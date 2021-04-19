import React from 'react';

import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { writeData } from '../analytics';

const helpAccordionOnChange = (_: any, expanded: any) => {
  if (expanded) {
    writeData('help_expanded');
  }
};

export const HowItWorks = () => <Accordion onChange={helpAccordionOnChange}>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <Typography>
      How it works
    </Typography>
  </AccordionSummary>

  <AccordionDetails>
    <Typography>
      Keys stored in your browser.
    </Typography>
  </AccordionDetails>
</Accordion>